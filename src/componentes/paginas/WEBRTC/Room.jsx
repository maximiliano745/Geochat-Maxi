import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
    const API_URL = "geochat-efn9.onrender.com"

  const userVideo = useRef();
  const partnerVideo = useRef();
  const userStream = useRef();
  const peerRef = useRef();
  const websocketRef = useRef(null);
  const { roomID } = useParams();
  //const roomID = useParams()?.match?.params?.roomID;


  const openCamera = async () => {
    const allDevices = await navigator.mediaDevices.enumerateDevices();
    const cameras = allDevices.filter(
      (device) => device.kind === "videoinput"
    );
    //alert(cameras.length)
    if (cameras.length >= 2) {
      const constraints = {
        audio: true,
        video: {
          deviceId: { exact: cameras[1].deviceId },
        },
      };
  
      try {
        return await navigator.mediaDevices.getUserMedia(constraints);
      } catch (error) {
        console.log("Error al obtener el flujo de la segunda cámara:", error);
      }
    } else if (cameras.length === 1) {
      // Si solo hay una cámara, usarla sin especificar deviceId
      const constraints = { audio: true, video: true };
  
      try {
        return await navigator.mediaDevices.getUserMedia(constraints);
      } catch (error) {
        console.log("Error al obtener el flujo de la única cámara:", error);
      }
    } else {
      console.log("No se encontraron cámaras disponibles.");
    }
  };


  

  useEffect(() => {
    openCamera().then((stream)=>{

      userVideo.current.srcObject = stream;
      userStream.current = stream;

      websocketRef.current = new WebSocket(
        //`ws://localhost:8000/join?roomID=${roomID}`
        `wss://geochat-efn9.onrender.com/api/v2/users/join?roomID=${roomID}`
      );

      websocketRef.current = new WebSocket(`wss://geochat-efn9.onrender.com/api/v2/users/join?roomID=${roomID}`);

      websocketRef.current.addEventListener("open", () => {
          //console.log("WebSocket ABIERTO.....");
          websocketRef.current.send(JSON.stringify({ join: "true" }));
      });

      websocketRef.current.addEventListener("message", async (e) => {
        //console.log("aca-------------> ",e.data)
        const message = JSON.parse(e.data);

        if (message.join) {
          callUser();
        }

        if (message.iceCandidate) {
          //console.log("Recibiendo y Agregando ICE Candidato");
          try {
            await peerRef.current.addIceCandidate(message.iceCandidate);
          } catch (error) {
            console.log("Error al recibir el ICE Candidato", error);
          }
        }

        if (message.offer) {
          handleOffer(message.offer);
        }

        if (message.answer){
          //console.log("Recibiendo Answer: ",message.answer)
          peerRef.current.setRemoteDescription(
            new RTCSessionDescription(message.answer)
          );
        };
      });
    });
  },[]);


  const handleOffer = async (offer) => {
    //console.log("Recibiendo Oferta / Creando Respuesta");
  
    peerRef.current = createPeer();
  
    try {
      await peerRef.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerRef.current.createAnswer();
      await peerRef.current.setLocalDescription(answer);
  
      // En este punto, la conexión debe estar en el estado correcto para enviar la respuesta (answer).
      websocketRef.current.send(JSON.stringify({ answer: peerRef.current.localDescription }));
    } catch (error) {
      console.log("Error al manejar la oferta:", error);
    }
  };
  

  const callUser = () => {
    //console.log("Llamando Otro Usuario");
    peerRef.current = createPeer();

    userStream.current.getTracks().forEach((track) => {
      peerRef.current.addTrack(track, userStream.current);
    });
  };

  const createPeer = () => {
    //console.log("Creando Peer Connection...");
    const peer = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    peer.onnegotiationneeded = handleNegotiationNeeded;
    peer.onicecandidate = handleCandidateEvent;
    peer.ontrack = handletrackEvent;

    return peer;
  };

  const handleNegotiationNeeded = async () => {
    //console.log("Crear Oferta");
    try {
      const myOffer = await peerRef.current.createOffer();
      await peerRef.current.setLocalDescription(myOffer);

      websocketRef.current.send(JSON.stringify({ offer: peerRef.current.localDescription }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCandidateEvent = (e) => {
    //console.log("Buscando ICE Candidato");
    if (e.candidate){
      //console.log("Canditato: ",e.candidate);
      try {
        websocketRef.current.send(
          JSON.stringify({ iceCandidate: e.candidate })
        );
          
      } catch (error) {
        console.log(error)        
      }
    }
  };

  const handletrackEvent = (e) => {
    //console.log("Recibiendo Tracks");
    partnerVideo.current.srcObject = e.streams[0];
  };

  return (
    <div>
      <video autoPlay controls={true} ref={userVideo}></video>
      <video autoPlay controls={true} ref={partnerVideo}></video>
    </div>
  );
}

export default Room;

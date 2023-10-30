import React, { useEffect, useRef, useState } from 'react';

const Video = () => {
    const videoElementRef = useRef(null);
    const audioElementRef = useRef(null);
    const [videoStream, setVideoStream] = useState(null);
    const [audioStream, setAudioStream] = useState(null);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then(function (stream) {
                // Asignar el flujo de medios a los elementos HTML
                videoElementRef.current.srcObject = stream;
                audioElementRef.current.srcObject = stream;

                // Establecer los flujos de video y audio
                setVideoStream(stream);
                setAudioStream(stream);

                // Iniciar la reproducción de video
                videoElementRef.current.play();
                // Puedes controlar la reproducción de audio según tus necesidades

                console.log('Acceso a la cámara y al micrófono exitoso.');
            })
            .catch(function (error) {
                console.error('Error al acceder a la cámara y al micrófono:', error);
            });
    }, []);

    console.log("Video Stream:", videoStream);
    console.log("Audio Stream:", audioStream);

    return (
        <div className="middle-container" style={{ height: '650px' }}>
            <div className="elemento">
                <video
                    ref={videoElementRef}
                    autoPlay
                ></video>
                <audio
                    ref={audioElementRef}
                    autoPlay
                    playsInline
                    muted
                ></audio>
            </div>
        </div>
    );
};

export default Video;

import React, { useEffect, useRef, useState } from 'react';

const Video = () => {
    const videoElementRef = useRef(null);
    const audioElementRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null); // Declarar la variable videoUrl
    const [audioUrl, setAudioUrl] = useState(null);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then(function (stream) {
                // Asignar el flujo de medios a los elementos HTML
                videoElementRef.current.srcObject = stream;
                audioElementRef.current.srcObject = stream;

                // Capturar las URLs de video y audio a partir del stream
                const videoTracks = stream.getVideoTracks();
                const audioTracks = stream.getAudioTracks();

                if (videoTracks.length > 0) {
                    setVideoUrl(window.URL.createObjectURL(videoTracks[0]));
                }

                if (audioTracks.length > 0) {
                    setAudioUrl(window.URL.createObjectURL(audioTracks[0]));
                }

                // Iniciar la reproducción de video
                videoElementRef.current.play();
                // Puedes controlar la reproducción de audio según tus necesidades

                console.log('Acceso a la cámara y al micrófono exitoso.');
            })
            .catch(function (error) {
                console.error('Error al acceder a la cámara y al micrófono:', error);
            });
    }, []);

    console.log("____________>", videoUrl);
    console.log("____________>", audioUrl);

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

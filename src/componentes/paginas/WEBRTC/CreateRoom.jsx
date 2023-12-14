import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {

    const API_URL = "geochat-efn9.onrender.com"
    const history = useNavigate();

    const create = async () => {
        try {
            const resp = await fetch(API_URL + "/api/v2/users/create");
            const { room_id } = await resp.json();
            history(`/room/${room_id}`);
        } catch (error) {
            console.error("Error al crear la sala:", error);
            // Manejar errores, por ejemplo, mostrar un mensaje al usuario
        }
    }

    useEffect(() => {
        create();
    }, []); // Se ejecuta solo una vez al montar el componente

    // No se está devolviendo ningún elemento JSX aquí
    return null;
}

export default CreateRoom;

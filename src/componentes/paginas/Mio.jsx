
import React, { useEffect, useState } from 'react';

//const API="http://localhost:10000/api/v1/Maxi"
const API="https://geochat-efn9.onrender.com/api/v1/Maxi"

const Mio = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsersFromAPI();
    }, []);

    const getAllUsersFromAPI = () => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers(data.users);
            })
            .catch(error => {
                console.error('Error al obtener usuarios:', error);
            });
    };

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>{user.username}      {user.Password}      {user.email}</li>
                    ))
                ) : (
                    <li>No se encontraron usuarios</li>
                )}
            </ul>
        </div>
    );
};

export default Mio;


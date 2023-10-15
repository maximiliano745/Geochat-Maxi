import React from 'react';
import { useState } from "react";
import AuthService from "../servicios/AuthService";
import { PropagateLoader } from 'react-spinners';
import './Contenedor.css'

function FormularioMail() {

    const [inputValues, setInputValues] = useState({
        email: '',
        name: "",
        message: ""
    });

    function handleChange(e) {
        setInputValues({
            ...inputValues,
            [e.target.id]: e.target.value,
        })
    }

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const otro = localStorage.getItem("email");
            const resp = await AuthService.mail(inputValues.email, inputValues.name, inputValues.message, otro);
            if (resp !== "{false}") {
                console.log(resp);
                alert("Enviado con Éxito....!!!!");
                setInputValues({
                    email: "",
                    name: "",
                    message: "",
                });
                //navigate('/mapa');
                //history.push('/mapa');
                setIsLoading(false);
            }
        } catch (error) {
            alert(error);
            setIsLoading(false);
        }
    }


    return (<>

        {isLoading ? (
            <div className="spinner-container">
                <PropagateLoader color="#010c0a" />
            </div>
        ) : null}

        <div className="form" style={{ flex: 1 }}>
            <h1 style={{ backgroundColor: 'grey' }}>Amistad </h1>
            <form style={{ marginLeft: "100x"}} id="contact-form"  onSubmit={handleSubmit} method="POST">
                <div className="mb-2 p-1 d-flex border rounded">
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" value={inputValues.name} onChange={e => handleChange(e)} placeholder="nombre" required />
                    </div>
                </div>
                <div className="mb-2 p-1 d-flex border rounded">
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={inputValues.email} onChange={e => handleChange(e)} placeholder='Email' required />
                    </div>
                </div>
                <div className="mb-2 p-1 d-flex border rounded">
                    <div className="form-group" >
                        <label htmlFor="message">Mensaje</label>
                        <textarea className="form-control" id="message" value={inputValues.message} onChange={e => handleChange(e)} style={{ height: '144px', }} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>);

}

export default FormularioMail;

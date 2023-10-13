import { useState } from "react";
import AuthService from "../servicios/AuthService";
import { PropagateLoader } from 'react-spinners';
import SplitPane from 'react-split-pane';
import './Split.css'
import Navbar from "../navegacion/Navbar";
//import { useNavigate } from 'react-router-dom'
//import Navbar from "../navegacion/Navbar";
//import { useHistory } from 'react-router-dom';

const Mail = () => {

  const contactos = [
    {
      nombre: "Maxi",
    },
    {
      nombre: "Pedro",
    },
    {
      nombre: "pablo",
    },
    {
      nombre: "Ariel",
    },
    {
      nombre: "Julia",
    },
    {
      nombre: "Maria"
    }
  ]

  const grupos = [
    {
      nombre: "Amigos",
    },
    {
      nombre: "Trabajo",
    },
    {
      nombre: "Facultad",
    },
    {
      nombre: "Negocios",
    },
    {
      nombre: "Chicas",
    },
    {
      nombre: "Familia"
    }
  ]

  //const history = useHistory();
  //const navigate = useNavigate();

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

  return (
    <>

      <SplitPane

        split="vertical"
        defaultSize="98%"  // Ajusta este valor según tus necesidades
        maxSize={1350}
        magintop="20%"
      >

        <div className="split-content" style={{ backgroundColor: "gray", display: "flex", height: "100%", justifyContent: "space-between" }}>
          {isLoading ? (
            <div className="spinner-container">
              <PropagateLoader color="#010c0a" />
            </div>
          ) : null}

          <div className="split-left">
            <div className="Form" style={{ flex: 1, marginRight: "100px" }}>
              <Navbar></Navbar>
              <h1 style={{ backgroundColor: 'wait' }}>Amistad </h1>
              <form id="contact-form" onSubmit={handleSubmit} method="POST" style={{ lineHeight: 4.5 }}>
                <div className="mb-2 p-1 d-flex border rounded">
                  {/* <div className="mx-2 mt-1"> */}
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" value={inputValues.name} onChange={e => handleChange(e)} placeholder="nombre" required />
                  </div>
                  {/* </div> */}
                </div>
                <div className="mb-2 p-1 d-flex border rounded">
                  {/* <div className="mx-2 mt-1"> */}
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={inputValues.email} onChange={e => handleChange(e)} placeholder='Email' required />
                  </div>
                  {/* </div> */}
                </div>
                <div className="mb-2 p-1 d-flex border rounded">
                  {/* <div className="mx-2 mt-1"> */}
                  <div className="form-group" >
                    <label htmlFor="message">Mensaje</label>
                    <textarea className="form-control" id="message" value={inputValues.message} onChange={e => handleChange(e)} style={{ height: '144px', }} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          <div style={{ textAlign: "left", justifyContent: "space-between" }}>

            <div className="split-content" style={{ display: "flex", flexDirection: "row" }}>

              <div className="data-visualization" style={{ display: "flex", marginRight: 10, flexDirection: "column", alignItems: "center" }}>

              <h2 style={{ backgroundColor: 'wait' }}>Contactos </h2>
                {contactos.map((item, index) => (
                  <div key={index}>
                    {item.nombre}
                  </div>
                ))}

              </div>

              <div className="data-visualization" style={{ display: "flex", marginLeft: 10, marginBotoom: "100%", flexDirection: "column", alignItems: "left" }}>
              <h2 style={{ backgroundColor: 'wait' }}>Grupos </h2>
                {grupos.map((item, index) => (
                  <div key={index}>
                    {item.nombre}
                  </div>
                ))}
              </div>

            </div>
            
          </div>
        </div>


        <div className="split-right" style={{ backgroundColor: "black" }}>
        </div>
      </SplitPane>
    </>
  )
}
Mail.propTypes = {}
export default Mail;

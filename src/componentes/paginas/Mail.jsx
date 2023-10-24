import Form from './FormularioMail'
import SplitPane from 'react-split-pane';
import './Split.css'
import './Contenedor.css';
import { useState, useEffect } from 'react'
import axios from "axios";


const Mail = ({ cc }) => {

  //const API_URL = "http://localhost:10000/"
  const API_URL = "https://geochat-efn9.onrender.com/"

  const getUserById = async (id) => {

    try {
      const response = await axios.post(API_URL + "api/v2/users/verContactos", {
        id
      });
      //console.log("Respuesta de obtener VERCONTACTOS:", response.data.Username);
      return response.data.Username;
    } catch (error) {
      console.error("Error en la solicitud de obtener contactos:", error);
      throw error;
    }
  };
  useEffect(() => {
    const fetchContactos = async () => {
      if (cc && cc.length > 0) {
        const contactosNombres = [];
  
        for (const id of cc) {
          const nombre = await getUserById(id);
          if (nombre) {
            console.log("Nombre del Contacto Obtenido: ", nombre);
            contactosNombres.push({ id, nombre });
          }
        }
  
        const algunContactoSeleccionado = contactosNombres.some(({ id, nombre }) => {
          const contactoExistente = contactos.find((c) => c.nombre === nombre);
          return contactoExistente && contactoExistente.seleccionado;
        });
  
        if (!algunContactoSeleccionado) {
          const contactosConEstado = contactosNombres.map(({ id, nombre }) => ({
            nombre,
            seleccionado: false,
            id, // Guardamos el ID del contacto
          }));
  
          setContactos(contactosConEstado);
        }
      }
    };
  
    fetchContactos();
  }, [cc]);
  

  const [contactos, setContactos] = useState([]);

  const [nombreGrupo, setNombreGrupo] = useState('');
  const [grupoCreado, setGrupoCreado] = useState(null);

  const handleSeleccion = (id) => {
    setContactos((prevContactos) =>
      prevContactos.map((contacto) =>
        contacto.nombre === id ? { ...contacto, seleccionado: !contacto.seleccionado } : contacto
      )
    );
  };

  const crearGrupo = () => {
    const contactosSeleccionados = contactos.filter((contacto) => contacto.seleccionado);
    const contactosSeleccionadosInfo = contactosSeleccionados
      .filter((contacto) => contacto.seleccionado)
      .map((contacto) => ({
        id: contacto.id,
        nombre: contacto.nombre,
      }));

    const idd = +localStorage.getItem("id");
    // Los datos a enviar a la API
    const data = {
      iddueño: idd,
      nombre: nombreGrupo,
      contactos: contactosSeleccionadosInfo,
    };
    console.log("datos: ", data);
    console.log("id Dueño: ", idd);
    console.log("nombre grupo: ", nombreGrupo);
    console.log("Integrantes: ", contactosSeleccionadosInfo);

    // Realiza la solicitud POST a la API para crear el grupo
    fetch(API_URL + "api/v2/users/crearGrupos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Mensaje de confirmación de la API
        setGrupoCreado({ nombre: nombreGrupo, contactos: contactosSeleccionadosInfo });
      })
      .catch((error) => {
        console.error('Error al crear el grupo', error);
      });
  };


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

  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4',
    'Elemento 5', 'Elemento 6', 'Elemento 7', 'Elemento 8',
    'Elemento 9', 'Elemento 10', 'Elemento 11', 'Elemento 12'];


  // Verificar si se cumplen las restricciones
  const restriccionesCumplidas = contactos.some(contacto => contacto.seleccionado) && nombreGrupo.trim() !== "";

  // Determinar la clase CSS según las restricciones
  const botonClase = restriccionesCumplidas ? "btn-success" : "btn-danger";


  return (
    <>
      <div>
        <SplitPane

          split="vertical"
          defaultSize={1335}  // Ajusta este valor según tus necesidades
          maxSize={1335}
          minSize={430}
        >
          <div className="split-content" style={{ backgroundColor: "gray", display: "flex", height: "100%", justifyContent: "space-between" }}>

            {/* Izquierda */}
            <div className="left-container">
              <Form></Form>
            </div>


            {/* Centro */}
            <div className="middle-container">
              {elementos.map((elemento, index) => (
                <div className="elemento" key={index}>
                  {elemento}
                </div>
              ))}
            </div>


            {/* Derecha */}
            <div className="right-container" style={{ textAlign: "left", justifyContent: "space-between" }}>

              <div className="split-content" style={{ display: "flex", flexDirection: "row" }}>

                {/* Contactos */}
                <div className="data-visualization" style={{ display: "flex", marginRight: 10, flexDirection: "column", alignItems: "center" }}>

                  <h2 style={{ backgroundColor: 'wait' }}>Contactos </h2>
                  {contactos.map((item, index) => (
                    <div key={index}>
                      {item.nombre}
                    </div>
                  ))}

                </div>

                {/* Grupos */}
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

          {/* Pantalla Negra */}
          <div className="split-right" style={{ backgroundColor: "black", width: '100%', height: '100%' }}>

            <div>
              <h2 style={{ backgroundColor: 'yellow' }}>Selecciona contactos y crea un grupo</h2>
              <input
                type="text"
                // backgroundColor={{#b0ce2e}}
                placeholder="Crea o Edita un Grupo..."
                value={nombreGrupo}
                onChange={(e) => setNombreGrupo(e.target.value)}
              />
              <div>
                {contactos.map((contacto) => (
                  <div key={contacto.nombre}>
                    <label>
                      <input
                        type="checkbox"
                        checked={contacto.seleccionado}
                        onChange={() => handleSeleccion(contacto.nombre)}
                      />
                      <span style={{ color: 'red', backgroundColor: 'blue' }}>{contacto.nombre}</span>
                    </label>
                  </div>
                ))}
              </div>
              <button className={`btn ${botonClase}`} onClick={crearGrupo}>
                Crear Grupo
              </button>
              {grupoCreado && restriccionesCumplidas && (
                <div>
                  <h3>Contactos en el grupo: {grupoCreado.contactos.filter(contacto => contacto).length}</h3>
                </div>
              )}
            </div>
          </div>
        </SplitPane>
      </div>
    </>
  )
}
Mail.propTypes = {}
export default Mail;

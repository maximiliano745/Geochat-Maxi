import Form from './FormularioMail'
import SplitPane from 'react-split-pane';
import './Split.css'
import './Contenedor.css';
import { useState } from 'react'



const Mail = () => {

  const [contactos, setContactos] = useState([
    {
      nombre: "Maxi",
    },
    {
      nombre: "Pedro",
    },
    {
      nombre: "Pablo",
    },
    {
      nombre: "Ariel",
    },
    {
      nombre: "Julia",
    },
    {
      nombre: "Maria",
    }
  ]);




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
    // Aquí puedes usar contactosSeleccionados para crear el grupo
    // También puedes usar el nombre del grupo de alguna manera
    setGrupoCreado({ nombre: nombreGrupo, contactos: contactosSeleccionados });
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
              <h2>Selecciona contactos y crea un grupo</h2>
              <input
                type="text"
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
                      {contacto.nombre}
                    </label>
                  </div>
                ))}
              </div>
              <button className={`btn ${botonClase}`} onClick={crearGrupo}>
                Crear Grupo
              </button>
             {grupoCreado  && restriccionesCumplidas &&(                
                <div>
                  <h3>Contactos en el grupo: {grupoCreado.contactos.filter(contacto => contacto.seleccionado).length}</h3>
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

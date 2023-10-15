import Form from './FormularioMail'
import SplitPane from 'react-split-pane';
import './Split.css'

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



  return (
    <>
      <div>
        <SplitPane

          split="vertical"
          defaultSize="98%"  // Ajusta este valor según tus necesidades
          maxSize={1350}
          magintop="20%"
        >
          <div className="split-content" style={{ backgroundColor: "gray", display: "flex", height: "100%", justifyContent: "space-between" }}>

            {/* Formulario Gris Izquierda */}
            <div className="left-container">
              <Form></Form>
            </div>

            {/* Derecha */}
            <div className="right-container" style={{ textAlign: "left", justifyContent: "space-between" }}>

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
      </div>
    </>
  )
}
Mail.propTypes = {}
export default Mail;

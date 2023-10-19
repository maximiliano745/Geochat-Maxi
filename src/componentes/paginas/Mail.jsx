import Form from './FormularioMail'
import SplitPane from 'react-split-pane';
import './Split.css'
import './Contenedor.css';


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

  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4',
    'Elemento 5', 'Elemento 6', 'Elemento 7', 'Elemento 8',
    'Elemento 9', 'Elemento 10', 'Elemento 11', 'Elemento 12'];


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


          <div className="split-right" style={{ backgroundColor: "black", width: '100%', height: '100%' }}>

          </div>


        </SplitPane>
      </div>
    </>
  )
}
Mail.propTypes = {}
export default Mail;

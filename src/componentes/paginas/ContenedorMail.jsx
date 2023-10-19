import React from 'react';
import './Contenedor.css';

function ContenedorMail() {
  // Supongamos que tienes un array de elementos que deseas renderizar

  return (
    <div className="middle-container">
      <div className="left-container">
        {/* Contenido del contenedor izquierdo */}
      </div>
      <div className="middle-container">
        {/* Usamos .map() para renderizar elementos en el contenedor del medio */}

      </div>
      <div className="right-container">
        {/* Contenido del contenedor derecho */}
      </div>
    </div>
  );
}

export default ContenedorMail;

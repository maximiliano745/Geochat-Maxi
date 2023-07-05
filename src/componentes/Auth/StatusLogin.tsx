import { useState } from "react";

interface StatusLoginProps  {
  isLoggedIn: boolean;
}

function StatusLogin({ isLoggedIn }: StatusLoginProps) {
  return (
    <div>
      {isLoggedIn ? (
        <p>¡Bienvenido! Acceso Concedido..!!!.</p>||true
      ) : (
        <p>Por favor Iniciar Sesion</p>
      )}
    </div>
  );
}

export default StatusLogin;

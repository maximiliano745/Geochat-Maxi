import { useEffect, useState } from "react";
interface StatusLoginProps {
  isLoggedIn: boolean;
}

function StatusLogin({ isLoggedIn }: StatusLoginProps) {
  const [isWelcomeMessageShown, setIsWelcomeMessageShown] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  // Mostrar el mensaje de bienvenida cuando isLoggedIn cambie a true
  useEffect(() => {
    if (isLoggedIn && !isWelcomeMessageShown) {
      setShowWelcomeMessage(true);
      setIsWelcomeMessageShown(true);

      // Ocultar el mensaje de bienvenida después de 5 segundos
      setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 4000);
    }
  }, [isLoggedIn, isWelcomeMessageShown]);

  // Mostrar "Por favor Iniciar Sesión" mientras isLoggedIn sea falso
  if (!isLoggedIn) {
    return <p>Por favor Iniciar Sesión</p>;
  }

  // Mostrar el mensaje de bienvenida por 5 segundos y luego null
  if (showWelcomeMessage) {
    return <p>¡Bienvenido! Acceso Concedido..!!!.</p>;
  }

  // Cuando showWelcomeMessage sea falso, retornar null para no mostrar nada
  return null;
}

export default StatusLogin;

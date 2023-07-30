import './App.css';
import Navbar from './componentes/navegacion/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './componentes/paginas/Login';
import Register from './componentes/paginas/Register';
import Mapas from './componentes/maps/Mapas';
import Mail from './componentes/paginas/Mail';
import Chat from './componentes/paginas/Chat';
import AuthProvider from './componentes/Auth/AuthProvider';
import  { useEffect, useState } from 'react';
import StatusLogin from './componentes/Auth/StatusLogin';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  let lat: any, lon: any

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos: { coords: any; }) {
    const crd = pos.coords;

    lat = parseFloat(`${crd.latitude}`);
    lon = parseFloat(`${crd.longitude}`);

    console.log(lat, lon);

    sessionStorage.setItem("lon", lon)
    sessionStorage.setItem("lat", lat)

  }

  function error(err: { code: any; message: any; }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // Función para realizar la tarea que se ejecutará una sola vez
  const tareaUnica = () => {
    console.log('Tarea única realizada');
  };

  // Función para realizar la tarea que se repetirá cada 5 segundos
  const tareaRepetida = () => {
    console.log('Tarea repetida realizada');
  };

  // UseEffect para iniciar el temporizador al montar el componente
  useEffect(() => {
    // Tarea única que se ejecutará una sola vez
    tareaUnica();

    // Tarea repetida que se ejecutará cada 5 segundos
    const intervalId = setInterval(tareaRepetida, 5000); // 5000 milisegundos = 5 segundos

    // Limpiar el temporizador al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  navigator.geolocation.getCurrentPosition(success, error, options);


  const login = () => {
    // Aquí puedes realizar la lógica de inicio de sesión.
    // Si el inicio de sesión es exitoso, llama a setIsLoggedIn(true).
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <StatusLogin isLoggedIn={isLoggedIn} />
      <header>
        <AuthProvider>
          <Router>
            {isLoggedIn && <Navbar />}
            <Routes>

              <Route path='/' element={<Login onLogin={login} />} />
              <Route path='/login' element={<Login onLogin={login} />} />

              <Route path='/register' element={<Register />} />
              <Route path='/mapa' element={<Mapas />} />
              <Route path='/mail' element={<Mail />} />
              <Route path='/chat' element={<Chat />} />

            </Routes>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;

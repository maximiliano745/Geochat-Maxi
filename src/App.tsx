import './App.css';
import Navbar from './componentes/navegacion/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './componentes/paginas/Login';
import Register from './componentes/paginas/Register';
import Mapas from './componentes/maps/Mapas';
import Mail from './componentes/paginas/Mail';
import Chat from './componentes/paginas/Chat';
import AuthProvider from './componentes/Auth/AuthProvider';
import { useEffect, useState } from 'react';
import StatusLogin from './componentes/Auth/StatusLogin';
import Mio from './componentes/paginas/Mio';
import axios from "axios";

const App = () => {

  //const API_URL = "http://localhost:10000/"
  const API_URL = "https://geochat-efn9.onrender.com/"


  const [contactos, setContactos] = useState([]);

  const id = +localStorage.getItem("id");
  let lat: any, lon: any

  
  const getContactos = async (id: Number) => {
    try {
      const response = await axios.post(API_URL + "api/v2/users/contactos", {
        id
      });
      console.log("Respuesta de obtener contactos:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud de obtener contactos:", error);
      throw error;
    }
  };

  function success(pos: { coords: any; }) {
    const crd = pos.coords;
    //alert('No ES Celular...');
    lat = parseFloat(`${crd.latitude}`);
    lon = parseFloat(`${crd.longitude}`);

    console.log(lat, lon);

    sessionStorage.setItem("lon", lon)
    sessionStorage.setItem("lat", lat)

  }

  function error(err: { code: any; message: any; }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };


  if (/Mobi|Android/i.test(navigator.userAgent)) {
    alert('Es Movil');
    fetch('https://geochat-efn9.onrender.com/api/v3/users/movil', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'correo@example.com',
        password: 'contraseña',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status) {
          //alert('Acceso concedido');
        } else {
          alert(data.msg);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    navigator.geolocation.getCurrentPosition(success, error, options);
    console.log('No Es Movil');
  }

  // Función para realizar la tarea que se ejecutará una sola vez
  const tareaUnica = () => {
    console.log('Tarea única realizada');

  };

  // Función para realizar la tarea que se repetirá cada 5 segundos
  const tareaRepetida = () => {
    getContactos(id)
      .then((data) => {
        setContactos(data);
      })
      .catch((error) => {
        console.error("Error al obtener contactos:", error);
      });
    console.log('Tarea repetida realizada');

  };

  // UseEffect para iniciar el temporizador al montar el componente
  useEffect(() => {
    tareaUnica();

    // Tarea repetida que se ejecutará cada 5 segundos
    const intervalId = setInterval(tareaRepetida, 5000); // 5000 milisegundos = 5 segundos

    // Limpiar el temporizador al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
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
              <Route path='/mail' element={<Mail cc={contactos} />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/mio' element={<Mio />} />

            </Routes>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}
export default App;

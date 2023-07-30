import './App.css';
import Navbar from './componentes/navegacion/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './componentes/paginas/Login';
import Register from './componentes/paginas/Register';
import Mapas from './componentes/maps/Mapas';
import Mail from './componentes/paginas/Mail';
import Chat from './componentes/paginas/Chat';
import AuthProvider from './componentes/Auth/AuthProvider';



const App = () => {

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

  navigator.geolocation.getCurrentPosition(success, error, options);



  return (
    <div className="App">
      <header>
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>

              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
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

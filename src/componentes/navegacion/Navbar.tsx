
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaUserFriends, FaEye } from "react-icons/fa";
import { Gi3DGlasses } from "react-icons/gi";
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email === 'maxiargento745@gmail.com') {
      setIsLoggedIn(true);
    }
  }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez

  const [elementoSeleccionado, setElementoSeleccionado] = useState('mapa');


  return (
    <div>
      
      {/* <nav className="navbar navbar-expand-lg bg-light"> */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(37, 32, 32, 0.7)' }}>
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item" style={elementoSeleccionado === 'mapa' ? { backgroundColor: 'green', color: 'white' } : {}}>
              <Link to="/mapa" onClick={() => setElementoSeleccionado('mapa')}>
                <FaEye size={28} />
              </Link>
            </li>

            <li className="nav-item" style={elementoSeleccionado === 'mail' ? { backgroundColor: 'green', color: 'white' } : {}}>
              <Link to="/mail" onClick={() => setElementoSeleccionado('mail')}>
                <FaSignOutAlt size={28} />
              </Link>
            </li>


            <li className="nav-item" style={elementoSeleccionado === 'chat' ? { backgroundColor: 'green', color: 'white' } : {}}>
              <Link to="/chat" onClick={() => setElementoSeleccionado('chat')}>
                <FaUserFriends size={28} />
              </Link>
            </li>

            {isLoggedIn && (
              <li className="nav-item" style={elementoSeleccionado === 'mio' ? { backgroundColor: 'green', color: 'white' } : {}}>
                <Link to="/mio" onClick={() => setElementoSeleccionado('mio')}>
                  <Gi3DGlasses size={28} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {}
export default Navbar
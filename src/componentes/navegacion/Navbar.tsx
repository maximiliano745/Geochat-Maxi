
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



  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">

          <li className="nav-item">
            {/* <Link className="nav-link" to="/mapa"> Mapa</Link> */}
            <Link to="/mapa">

              <FaEye size={28} />
              {/* <IoEyeSharp /> */}

            </Link>
          </li>

          <li className="nav-item">
            {/* <Link className="nav-link" to="/mail"> Mail</Link> */}
            <Link to="/mail">

              <FaSignOutAlt size={28} />

            </Link>
          </li>


          <li className="nav-item">
            {/* <Link className="nav-link" to="/chat"> Chat</Link> */}
            <Link to="/chat">

              <FaUserFriends size={28} />

            </Link>
          </li>

          {isLoggedIn && (
            <li className="nav-item">
              {/* <Link className="nav-link" to="/chat"> Chat</Link> */}
              <Link to="/mio">

                <Gi3DGlasses size={28} />

              </Link>
            </li>
          )}

        </ul>
      </div>
    </nav>
  )
}
Navbar.propTypes = {}
export default Navbar
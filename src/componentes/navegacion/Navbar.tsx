
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
//import { FaEye } from "react-icons/fa";
import { FaSignOutAlt, FaUserFriends, FaEye } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">

        <ul className="navbar-nav mx-auto">

          <li className="nav-item">
            {/* <Link className="nav-link" to="/mapa"> Mapa</Link> */}
            <Link to="/mapa">
              <a>
                <FaEye size={28} text-alignmentBaseline />
                {/* <IoEyeSharp /> */}
              </a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <Link className="nav-link" to="/mail"> Mail</Link> */}
            <Link to="/mail">
              <a>
                <FaSignOutAlt size={28} />
              </a>
            </Link>
          </li>


          <li className="nav-item">
            {/* <Link className="nav-link" to="/chat"> Chat</Link> */}
            <Link to="/chat">
              <a>
                <FaUserFriends size={28} />
              </a>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
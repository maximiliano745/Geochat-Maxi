
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">

      <ul className="navbar-nav mx-auto">
       
        <li className="nav-item">
          <Link className="nav-link" to="/mapa"> Mapa</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/mail"> Mail</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/chat"> Chat</Link>
        </li>




      {/*   <li className="nav-item">
          <Link className="nav-link" to="/login"> Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register"> Register</Link>
        </li> */}

      </ul>
    </div>
</nav>
  )
}

Navbar.propTypes = {}

export default Navbar
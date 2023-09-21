import { AuthCard } from '../../vistas/AuthCard'
import logo from '../../imagenes/logo.png'
import accountIcon from '../../imagenes/account.svg'
import passwordIcon from '../../imagenes/password.svg'
import { ChangeEvent, useState } from 'react'
import AuthService from '../servicios/AuthService'
import { Link } from 'react-router-dom'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners';

interface user {
  email: string,
  password: string,
  status: boolean
}

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {

  localStorage.removeItem("user");
  sessionStorage.removeItem("nombre");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("status");

  const [inputValues, setInputValues] = useState<user>({
    email: '',
    password: "",
    status: false
  });

  const [isLoading, setIsLoading] = useState(false);


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
  }

  const navigate = useNavigate();
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const resp = await AuthService.login(inputValues.email, inputValues.password);
      console.log("Respuesta del login: ", resp.data);

      if (resp.data === '{"OK!!, Email EXISTENTE....!!!"}') {
        alert("Acceso Concedido....!!!!");
        console.log("Inicio de sesión exitoso");
        onLogin();
        navigate('/mapa');
        return resp.data;
      } else {
        setIsLoading(false);
        alert(resp.data)
        console.log("Error en la solicitud:");
        return null;
      }


    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  }

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <PropagateLoader color="#010c0a" />
        </div>
      ) : null}

      <div>Login</div><AuthCard name={'maxi'} mail={''} password={''} status={false}>

        <form autoComplete="off" onSubmit={handleSubmit} >
          <Link to="/register">Registro</Link>
          <div className="text-center mb-2">
            <img
              className="img-fluid"
              src={logo}
              alt="login" />
          </div>

          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1">
              <img
                className="img-fluid"
                src={accountIcon}
                alt="iconUser" />
            </div>

            <input name="email" type="email" required
              value={inputValues.email}
              autoFocus
              className="form-control border-0 txt-input"
              placeholder="Email"
              onChange={e => handleChange(e)}>
            </input>

          </div>
          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1">
              <img
                className="img-fluid"
                src={passwordIcon}
                alt="iconUser" />
            </div>

            <input type='password' name="password" required
              value={inputValues.password}
              className="form-control border-0  txt-input"
              placeholder="Password"
              onChange={e => handleChange(e)} />
          </div>

          <div className="row d-flex justify-content-between mt-3 mb-2">
            <div className="mb-3">
              <div className="form-check ms-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="mycheckbox" />
                <label className="form-check-label" htmlFor="mycheckbox">
                  Remember
                </label>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
          <div className="mt-3 mb-3 text-center">
          </div>
        </form>

      </AuthCard></>
  )
}
Login.propTypes = {}
export default Login
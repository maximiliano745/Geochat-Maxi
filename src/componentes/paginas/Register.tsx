import { AuthCard } from '../../vistas/AuthCard'
import logo from '../../imagenes/logo.png'
import accountIcon from '../../imagenes/account.svg'
import passwordIcon from '../../imagenes/password.svg'
import { ChangeEvent, useState } from 'react'
import AuthService from '../servicios/AuthService'
import { Link, useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners';


interface user {
  email: string,
  password: string,
  username: string
}


const Register = () => {

  const [inputValues, setInputValues] = useState<user>({
    email: '',
    password: "",
    username: '',
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
      const resp = await AuthService.register(inputValues.username, inputValues.email, inputValues.password);
      if (resp) {
        alert(resp)
        if (resp !== '{"Error Email EXISTENTE....!!!"}'){
          localStorage.setItem("email", inputValues.email)
          navigate('/Login');
        }
          
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error)
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

      <div >Register</div><AuthCard name={''} mail={''} password={''} status={false}  >

        <form autoComplete="new-form" onSubmit={handleSubmit}>

          <Link to="/">Acceso</Link>

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

            <input name="email" type="email" autoComplete='new-email' required
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

            <input type='password' name="password" autoComplete='new-password' required
              value={inputValues.password}
              className="form-control border-0  txt-input"
              placeholder="Password"
              onChange={e => handleChange(e)} />
          </div>


          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1">
              <img
                className="img-fluid"
                src={accountIcon}
                alt="iconUser" />
            </div>

            <input type='username' name="username" autoComplete='new-name' required
              value={inputValues.username}
              className="form-control border-0  txt-input"
              placeholder="Nombre"
              onChange={e => handleChange(e)}>
            </input>

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

Register.propTypes = {}
export default Register

import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import useAuth from '../Auth/useAuth';

interface HomProps { }

const Home: React.FC<HomProps> = () => {
  const auth = useAuth();
  const handleLogin = () => {
    auth?.signIn(() => {
      // Login aca....
      // return <Login />
    });
  };
  return (
    <div>Inicio
      <div>
        <Link to='/login'>Login</Link>
        <br></br>
        <Link to='/public-page'>Public Page-Content</Link>
        <div>Usuario: {JSON.stringify(auth?.user)}</div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>

  )
}
export default Home

import React, { useEffect, useState } from 'react'
import NavBar from './NavBar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from "../supabase/client.js"
import './styles/loginForm.css'
import { useAuth } from './hooks/UserContext.jsx'

function loginForm() {

  const { isLogged } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert('Inicio de sesion fallido')
      } else {
        alert("Inicio de sesion Exitoso!")
        navigate("/")
      }

    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  };



  return (
    <div>
      <NavBar />
      <div className='vh'>
        <div className='formContainer'>
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleLogin}>
            <input type="email" name="" id="email" placeholder='Correo Electrónico' className='loginInput'
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="" id="password" className='loginInput' placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)} />
            <button className='loginInput' id='button'>Enviar</button>
          </form>
          <Link to="/signup" className='registerLink'>Registrarse</Link>
        </div>
      </div>
    </div>
  )
}

export default loginForm
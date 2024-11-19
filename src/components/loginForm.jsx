import React from 'react'
import NavBar from './NavBar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from "../supabase/client.js"
import './styles/loginForm.css'

function loginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      console.log('Inicio de sesión exitoso:', data); 
      navigate("/")
      
    } catch (error) {
      setError(error.message);
    }
  };



  return (
    <div>
      <NavBar/>
      <div className='formContainer'>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="" id="email" placeholder='Correo Electrónico' className='loginInput'
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="" id="password" className='loginInput' placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)} />
          <button className='loginInput'>Enviar</button>
        </form>
        <Link to="/signup" className='registerLink'>Registrarse</Link>
      </div>
    </div>
  )
}

export default loginForm
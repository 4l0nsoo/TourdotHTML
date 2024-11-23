import React from 'react'
import NavBar from './NavBar.jsx'
import { useState, useEffect } from 'react'
import { supabase } from "../supabase/client.js"
import { useNavigate } from 'react-router-dom'
import './styles/loginForm.css'
import { useAuth } from './hooks/UserContext.jsx'

function signUpForm() {

  const { isLogged } = useAuth()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.auth.signUp({
        email,
        password: pass,
        options:{
          data: { username },
        }
      })

      const { data } = await supabase.
        from('user_data').
        insert({
          username: username,
          email
        });

      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <NavBar />
      <div className='vh'>
        <div className='formContainer'>
          <form onSubmit={HandleSubmit}>
            <input type="text" name="" id="user" placeholder='Nombre de Usuario' className='loginInput' required
              onChange={(e) => setUsername(e.target.value)} />
            <input type="email" name="" id="email" placeholder='Correo Electrónico' className='loginInput' required
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="" id="pass" placeholder='Contraseña' className='loginInput' required
              onChange={(e) => setPass(e.target.value)} />
            <input type="password" name="" id="repPass" placeholder='Repita la contraseña' className='loginInput' required />
            <button className='loginInput'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default signUpForm
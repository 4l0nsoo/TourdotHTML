import React from 'react'
import NavBar from './navBar'
import './styles/loginForm.css'

function loginForm() {
  return (
    <div>
      <NavBar/>
      <div className='formContainer'>
        <form action="">
          <input type="text" name="" id="user" placeholder='Nombre de Usuario' className='loginInput' />
          <input type="email" name="" id="email" placeholder='Correo Electrónico' className='loginInput' />
          <input type="password" name="" id="pass" placeholder='Contraseña' className='loginInput' />
          <input type="button" value="Enviar" id='btn' className='loginInput' />
        </form>
      </div>
    </div>
  )
}

export default loginForm
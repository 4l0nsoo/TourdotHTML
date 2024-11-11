import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'

function navBar() {
  return (
    <>
      <header>
        <nav className='nav-container'>
          <Link to='/' className='nav-elmnt'><img src="src\assets\Logov3 sin fondo.png" alt="Logoimg" /></Link>
          <Link to='/blog' className='nav-elmnt'>Blog</Link>
          <Link to='/login' className='nav-elmnt'>Login</Link>
        </nav>
      </header>
    </>
  )
}

export default navBar
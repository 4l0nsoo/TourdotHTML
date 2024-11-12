import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'
import Logo from "../assets/Logov3SinFondo.png"

function navBar() {
  return (
    <>
      <header>
        <nav className='nav-container'>
          <Link to='/' className='nav-elmnt'><img src={Logo} alt="Logoimg" /></Link>
          <Link to='/blog' className='nav-elmnt'>Blog</Link>
          <Link to='/login' className='nav-elmnt'>Login</Link>
        </nav>
      </header>
    </>
  )
}

export default navBar
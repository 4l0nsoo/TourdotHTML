import React from 'react'
import {Link } from 'react-router-dom'
import './styles/navBar.css'

function navBar() {
  return (
    <>
    <nav className='nav-container'>
        <Link to='/' className='nav-elmnt'>Home</Link>
        <Link to='/blog' className='nav-elmnt'>Blog</Link>
        <Link to='/login' className='nav-elmnt'>Login</Link>
    </nav>
    </>
  )
}

export default navBar
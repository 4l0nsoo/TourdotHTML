import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'
import Logo from "../assets/Logov3SinFondo.png"
import { supabase } from '../supabase/client'
import {useAuth} from './hooks/UserContext'

function navBar() {

   const {isLogged} = useAuth()

  return (
    <>
      <header>
        <nav className='nav-container'>
          <Link to='/' className='nav-elmnt'><img src={Logo} alt="Logoimg" /></Link>
          <Link to='/blog' className='nav-elmnt'>Blog</Link>
          {isLogged ? (
            <button onClick={() => supabase.auth.signOut()} className='nav-elmnt'>Cerrar Sesión</button>
            ) : (
              <Link to='/login' className='nav-elmnt'>Login</Link>)
          }
        </nav>
      </header>
    </>
  )
}

export default navBar
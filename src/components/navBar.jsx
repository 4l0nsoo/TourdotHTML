import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'
import Logo from "../assets/Logov3SinFondo.png"
import { supabase } from '../supabase/client'

function navBar() {

  const [isLogged, setisLogged] = useState(false)

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setisLogged(!!session); // Marca true si session existe, de lo contrario false
      console.log(session);
    });
  
    // Limpia el listener al desmontar el componente
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <header>
        <nav className='nav-container'>
          <Link to='/' className='nav-elmnt'><img src={Logo} alt="Logoimg" /></Link>
          <Link to='/blog' className='nav-elmnt'>Blog</Link>
          {isLogged ? (
            <button onClick={() => supabase.auth.signOut()}>Cerrar Sesión</button>
            ) : (
              <Link to='/login' className='nav-elmnt'>Login</Link>)
          }
        </nav>
      </header>
    </>
  )
}

export default navBar
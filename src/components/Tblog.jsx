import React from 'react'
import NavBar from './NavBar'
import { Api } from '../Api'
import { Link } from 'react-router-dom'

function Tblog() {

  return (
    <>
    <NavBar/>

    <Link to='/create-post'>Crear Post</Link>

    <div>
      <img src="" alt="" />
      <div>
        <h2></h2>
        <p></p>
        <span></span>
        <span></span>

      </div>
    </div>
    </>
  )
}

export default Tblog
import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/home.css"


function home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <img src="" alt="" />
        <h1></h1>
      </div>
      <section>
        <h2>Descubre Lugares Que No Habias Visto Antes!</h2>
        <div>
          <div>
            <img src="" alt="Torre Eiffel" />
            <span></span>
            <p>El sitio mas bello del mundo!!! :D</p>
          </div>
          <p>Mira Lo Que Opina La Gente Sobre Ese Sitio!</p>
        </div>
        <div>
          <p>Opiniones sobre ello</p>
          <div>
            <p>Coincido totalmente</p>
            <span></span>
          </div>
        </div>
      </section>
      <div>
        <h2>Unete a Nuestro Blog E Interactua!</h2>
        <Link to="/blog"></Link>
      </div>
    </>
  )
}

export default home
import React from 'react'
import {Link } from 'react-router-dom'

function navBar() {
  return (
    <>
    <nav>
        <h4>Nav</h4>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
    </nav>
    </>
  )
}

export default navBar
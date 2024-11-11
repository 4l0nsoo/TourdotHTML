import React from 'react'
import NavBar from './navBar'
import { Api } from '../Api'

function Tblog() {
  const {data} = Api("blogs")

  console.log(data)

  return (
    <>
    <NavBar/>

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
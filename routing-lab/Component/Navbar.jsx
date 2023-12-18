import React from 'react'
import { Link } from 'react-router-dom'
import '../src/App.css'

const Navbar = () => {
  return (
    <div id="header">
    <ul>
    <div id="main">
    <li id="Home"><Link to="/Home"><p>Kalvium  <span style={{ color: 'red' }}>&#x2764;</span></p></Link></li>
    </div>
    <div id="side">
    <li id="About"><Link to="/About"><p>About</p></Link></li>
    <li id="Contact"><Link to="/Contact"><p>Contact</p></Link></li>
    </div>
  </ul>
  </div>
  )
}

export default Navbar

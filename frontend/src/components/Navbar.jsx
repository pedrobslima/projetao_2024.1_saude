import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/default_logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/">
            <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/exercicios">Exercícios</Link>
            </li>
            <li>
                <Link to="/playlist">Playlist</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;

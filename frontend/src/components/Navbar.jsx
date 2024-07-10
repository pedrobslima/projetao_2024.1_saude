import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/default_logo.png';

function Navbar({ pageTitle }) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <h1>{pageTitle}</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exercicio/pulso/1">Exercícios</Link> {/* link estático só para testes */}
          </li>
          <li>
            <Link to="/musica">Música</Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={isMuted ? faVolumeMute : faVolumeUp}
          onClick={toggleMute}
          className="volume-icon"
        />
      </div>
    </nav>
  );
}

export default Navbar;

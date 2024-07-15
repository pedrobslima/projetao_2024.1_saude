import './Navbar.css';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/default_logo.png';
import { MainContext } from './context/MainContext';

function Navbar({ pageTitle }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isMute, setIsMute] = useContext(MainContext).sound.mute

  const toggleMute = () => {
    setIsMute(!isMute);
  };

  return (
    <nav className="navbar">
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
            <Link to="/exercicio/pulso/1">Exercícios</Link>{" "}
            {/* link estático só para testes */}
          </li>
          <li>
            <Link to="/musica">Música</Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={isMute ? faVolumeMute : faVolumeUp}
          onClick={toggleMute}
          className="volume-icon"
        />
      </div>
    </nav>
  );
}

export default Navbar;

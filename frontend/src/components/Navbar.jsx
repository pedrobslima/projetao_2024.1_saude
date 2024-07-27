import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo_full.png";
import { localContextGetInfo, localContextUpdateInfo } from "./context/localContext";

function Navbar({ pageTitle }) {
  const [isMuted, setIsMuted] = useState() 

  const toggleMute = () => {
    localContextUpdateInfo("music", "muted", !isMuted)
    setIsMuted(localContextGetInfo("music", "muted"))
  };

  useEffect(() => {
    setIsMuted(localContextGetInfo("music", "muted"))
  }, [])

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
          icon={isMuted ? faVolumeMute : faVolumeUp}
          onClick={toggleMute}
          className="volume-icon"
        />
      </div>
    </nav>
  );
}

export default Navbar;

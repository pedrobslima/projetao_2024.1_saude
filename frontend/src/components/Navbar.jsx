import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo_full.png";
import { localContextGetInfo, localContextUpdateInfo } from "./context/localContext";
import { fetchUserArea } from "../utils/utils";

function Navbar({ pageTitle }) {
  const [isMuted, setIsMuted] = useState();
  const [selectedArea, setSelectedArea] = useState(null);

  const toggleMute = () => {
    localContextUpdateInfo("music", "muted", !isMuted);
    setIsMuted(localContextGetInfo("music", "muted"));
  };

  useEffect(() => {
    setIsMuted(localContextGetInfo("music", "muted"));
  }, []);

  useEffect(() => {
    fetchUserArea(setSelectedArea);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <h1>{pageTitle}</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* <li>
            {selectedArea ? (
              <Link to={`/exercicio/${selectedArea}/1`}>Exercícios</Link>
            ) : (
              <Link to={`/exercicio/pulso/1`}>Exercícios</Link>
            )}
          </li> */}
          <li>
            <Link to="/musica">Música</Link>
          </li>
        </ul>
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} onClick={toggleMute} className="volume-icon" />
      </div>
    </nav>
  );
}

export default Navbar;

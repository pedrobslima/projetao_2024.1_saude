import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./MusicTherapyPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import VideoContainer from "../../VideoContainer";
import PlayerHeader from "../../shared/playerHeader/PlayerHeader";
import PlayerControls from "../../shared/playerControls/PlayerControls";
import Button from "../../shared/Button/Button";
import PlayerDescription from "../../shared/playerDescription/PlayerDescription";
import { useParams } from "react-router-dom";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import { getParamId, changeUrl, formatTime } from "../../../utils/utils";
import musics from "./musics.json";
import { localContextGetInfo } from "../../context/localContext";

function MusicTherapyPage({ ref }) {
  // Constanttes:
  const baseUrl = "/musica";
  const musicPlayerElementId = "musicPlayer";
  const noMusic = {
    Titulo: "",
    Artista: "",
    Genero: "",
    Link: "",
  };
  const MusicPlayerRef = useRef(null);

  // Variaveis:
  const { playlistId, setPlaylistId, musicaId, setMusicId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [musicInfo, setMusicInfo] = useState(noMusic);
  const [playIcon, setPlayIcon] = useState(true);
  const [musicTime, setMusicTime] = useState("");

  // Funcoes:
  const handlePlayPause = () => {
    if (MusicPlayerRef) {
      MusicPlayerRef.PlayPauseMusic();
      setPlayIcon(!playIcon);
    }
  };

  const handleRestart = () => {
    if (MusicPlayerRef) {
      MusicPlayerRef.restartMusic();
      setPlayIcon(true);
    }
  };

  const nextMusic = () => {
    let nextMusicIndex = getParamId(musicaId) + 1;
    if (nextMusicIndex >= playlist.length) {
      nextMusicIndex = 0;
    }
    changeUrl(`${baseUrl}/${getParamId(playlistId)}/${nextMusicIndex}`);
  };

  const previousMusic = () => {
    let previousMusicIndex = getParamId(musicaId) - 1;
    if (previousMusicIndex < 0) {
      previousMusicIndex = playlist.length - 1;
    }
    changeUrl(`${baseUrl}/${getParamId(playlistId)}/${previousMusicIndex}`);
  };

  function getMusicInfo(playlist, index) {
    if (index >= 0 && index < playlist.length) {
      return playlist[index];
    } else {
      return noMusic;
    }
  }

  const canPlayAudio = () => {
    return getParamId(musicaId) >= 0 && getParamId(musicaId) < playlist.length;
  };

  const formatMusicTime = (time) => {
    if (isNaN(time)) {
      setMusicTime("0:00");
    } else {
      setMusicTime(formatTime(time));
    }
  };

  useEffect(() => {
    setPlaylist(musics);
    setMusicInfo(getMusicInfo(playlist, getParamId(musicaId)));
  }, [playlistId, musicaId, playlist, musicTime]);

  return (
    <div className={styles.playerContainer}>
      <MusicPlayer
        ref={MusicPlayerRef}
        link={musicInfo.Link}
        canPlay={canPlayAudio()}
        sendTime={formatMusicTime}
        ended={nextMusic}
        isMuted={localContextGetInfo("music", "muted")}
      />
      <div className={styles.playerContainerDiv}>
        <PlayerHeader title="Relaxe sua mente" time={musicTime} backgroundColor="#99AAE7" />
        <div className={styles.content}>
          <div className={styles.videoContainer}>
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/UxhDlsH0cGU"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <PlayerControls>
            <Button onClick={handlePlayPause} color="#99AAE7">
              <FontAwesomeIcon icon={playIcon === true ? faPause : faPlay} fontSize={30} />
            </Button>
            <Button onClick={handleRestart} color="#A6CBCB">
              <FontAwesomeIcon icon={faRedoAlt} fontSize={30} />
            </Button>
            <Button onClick={nextMusic} color="#EED38F">
              Proxima
            </Button>
            <Button onClick={previousMusic} color="#FFB774">
              Anterior
            </Button>
          </PlayerControls>
        </div>
        <PlayerDescription>
          <p>
            Tocando agora: <br />
            {musicInfo.Titulo} - {musicInfo.Artista}
          </p>
        </PlayerDescription>
      </div>
    </div>
  );
}

export default MusicTherapyPage;

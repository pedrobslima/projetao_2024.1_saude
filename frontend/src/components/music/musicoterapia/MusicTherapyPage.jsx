import React, { useEffect, useState } from 'react';
import styles from './MusicTherapyPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import VideoContainer from '../../VideoContainer';
import PlayerHeader from '../../shared/playerHeader/PlayerHeader';
import PlayerControls from '../../shared/playerControls/PlayerControls';
import Button from '../../shared/Button/Button';
import PlayerDescription from '../../shared/playerDescription/PlayerDescription';
import musics from "./musics.json"
import { useParams } from 'react-router-dom';
import { getParamId } from '../../../utils/utils';


function MusicPlayer({type=""}) {
  // Variaveis:
  const {playlistId, musicaId} = useParams()
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [playlist, setPlaylist] = useState([])
  const noMusic = {
    "Titulo": "",
    "Artista": "",
    "Genero": "",
    "Link": ""
  }
  const [currentMusic, setCurrentMusic] = useState(noMusic)
  const [isPlaying, setIsPlaying] = useState(true)

  // Funcoes:
  function getMusicInfo(playlist, index) {
    if (index >= 0 && index < playlist.length) {
      return playlist[index]
    }
    else {
      return noMusic
    }
  }

  const PlayPauseMusic = () => {
    if (isPlaying){
      pauseMusic()
    }
    else {
      playMusic()
    }
  }

  const playMusic = () => {
    let audio = document.getElementById("audioPlayer")
    if (audio) {
      audio.play()
      setIsPlaying(true)
    }
  }
  
  const pauseMusic = () => {
    let audio = document.getElementById("audioPlayer")
    if (audio) {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const restartMusic = () => {
    let audio = document.getElementById("audioPlayer");
    if (audio) {
      audio.currentTime = 0
      audio.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    setCurrentIndex(getParamId(musicaId))
    setPlaylist(musics)
    setCurrentMusic(getMusicInfo(playlist, currentIndex))
  }, [currentIndex, playlist])

  return (
    <div className={styles.playerContainer}>
      <audio id="audioPlayer" src={currentMusic.Link} autoPlay={true}></audio>
      <div className={styles.playerContainerDiv}>
        <PlayerHeader title="Relaxe sua mente"/>
        <div className={styles.content}>
            <div className={styles.videoContainer}>
              
            </div>
            <PlayerControls>
              <Button onClick={PlayPauseMusic}><FontAwesomeIcon icon={isPlaying === true ? faPlay : faPause}/></Button>
              <Button onClick={restartMusic}><FontAwesomeIcon icon={faRedoAlt}/></Button>
              <Button>Proxima</Button>
              <Button>Anterior</Button>
            </PlayerControls>
        </div>
        <PlayerDescription>
          <p>
          Tocando agora: <br/>
          {currentMusic.Titulo} - {currentMusic.Artista}
          </p>
        </PlayerDescription>
      </div>
    </div>
  );
}

export default MusicPlayer
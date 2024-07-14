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
import { getParamId, changeUrl } from '../../../utils/utils';


function MusicPlayer({}) {
  // Constanttes:
  const baseUrl = "/musica"
  const noMusic = {
    "Titulo": "",
    "Artista": "",
    "Genero": "",
    "Link": ""
  }

  // Variaveis:
  const {playlistId, setPlaylistId, musicaId, setMusicId} = useParams()
  const [currentMusicIndex, setcurrentMusicIndex] = useState(-1)
  const [playlist, setPlaylist] = useState([])
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
    if (audio && canPlayAudio()) {
      audio.play()
      setIsPlaying(true)
    }
  }
  
  const pauseMusic = () => {
    let audio = document.getElementById("audioPlayer")
    if (audio && canPlayAudio()) {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const restartMusic = () => {
    let audio = document.getElementById("audioPlayer");
    if (audio && canPlayAudio()) {
      audio.currentTime = 0
      audio.play()
      setIsPlaying(true)
    }
  }

  const nextMusic = () => {
    let nextMusicIndex = currentMusicIndex + 1
    if (nextMusicIndex >= playlist.length) {
      nextMusicIndex = 0
    }
    changeUrl(`${baseUrl}/${getParamId(playlistId)}/${nextMusicIndex}`)
  }

  const previousMusic = () => {
    let previousMusicIndex = currentMusicIndex -1
    if (previousMusicIndex < 0) {
      previousMusicIndex = playlist.length - 1
    }
    changeUrl(`${baseUrl}/${getParamId(playlistId)}/${previousMusicIndex}`)
  }

  const canPlayAudio = () => {
    return currentMusicIndex >= 0 && currentMusicIndex < playlist.length
  }

  useEffect(() => {
    setcurrentMusicIndex(getParamId(musicaId))
    setPlaylist(musics)
    setCurrentMusic(getMusicInfo(playlist, currentMusicIndex))
  }, [currentMusicIndex, playlist])

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
              <Button onClick={nextMusic}>Proxima</Button>
              <Button onClick={previousMusic}>Anterior</Button>
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
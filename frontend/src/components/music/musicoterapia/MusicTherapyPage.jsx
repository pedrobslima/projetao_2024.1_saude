import React, { useEffect, useRef, useState } from "react";
import api from "../../../main/api"
import styles from "./MusicTherapyPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import PlayerHeader from "../../shared/playerHeader/PlayerHeader";
import PlayerControls from "../../shared/playerControls/PlayerControls";
import Button from "../../shared/Button/Button";
import PlayerDescription from "../../shared/playerDescription/PlayerDescription";
import { useParams } from "react-router-dom";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import { getParamId, changeUrl, formatTime } from "../../../utils/utils";
import { localContextGetInfo } from "../../context/localContext"
import rio_arvore_floresta_video from "../../../assets/videos/rio_arvore_floresta.mp4"
import caminho_caminhada_arvores_video from "../../../assets/videos/caminho_caminhada_arvores.mp4"
import ondas_oceano_video from "../../../assets/videos/ondas_oceano.mp4"
import tartaruga_tanque_video from "../../../assets/videos/tartaruga_tanque.mp4"

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
  const videos_lista = [rio_arvore_floresta_video, caminho_caminhada_arvores_video, ondas_oceano_video, tartaruga_tanque_video]

  // Variaveis:
  const { playlistId, setPlaylistId, musicaId=0, setMusicId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [musicInfo, setMusicInfo] = useState(noMusic);
  const [playIcon, setPlayIcon] = useState(true);
  const [musicTime, setMusicTime] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(0)

  // Funcoes:
  const handlePlayPause = () => {
    if (MusicPlayerRef) {
      MusicPlayerRef.PlayPauseMusic()
      setPlayIcon(!playIcon)
      playPauseVideo(!playIcon)
    }
  };

  const handleRestart = () => {
    if (MusicPlayerRef) {
      MusicPlayerRef.restartMusic()
      setPlayIcon(true)
      playPauseVideo(!playIcon)
    }
  };

  const nextMusic = () => {
    let nextMusicIndex = musicaId + 1
    if (nextMusicIndex >= playlist.length) {
      nextMusicIndex = 0
    }
    changeUrl(`${baseUrl}/${playlistId}/${nextMusicIndex}`)
  }

  const previousMusic = () => {
    let previousMusicIndex = musicaId - 1
    if (previousMusicIndex < 0) {
      previousMusicIndex = playlist.length - 1
    }
    changeUrl(`${baseUrl}/${playlistId}/${previousMusicIndex}`)
  }

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

  const playPauseVideo = (value) => {
    let video = document.getElementById("video_relaxante")
    if (video) {
      if (value == true) {
        video.play()
      }
      else if (value == false) {
        video.pause()
      }
    }
  }

  function getRandomVideoIndex(videos) {
    var randomIndex = Math.floor(Math.random() * videos.length)
    return randomIndex
  }

  useEffect(() => {
    setSelectedVideo(getRandomVideoIndex(videos_lista))
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (playlistId){
        try {
          // Playlist:
          var path = `/musica/${playlistId}/${musicaId}`
          const fetchedData = await api.get(path)
          setPlaylist(fetchedData["data"]["data"]["playlist"])
          // Musica:
          setMusicInfo(fetchedData["data"]["data"]["musica"])
          
        } catch (error) {
            console.error('Error loading playlist:', error);
        }
      }
    }
    fetchData()
    
    //setMusicInfo(getMusicInfo(playlist, getParamId(musicaId)));
  }, [playlistId, musicaId]);

  useEffect(() => {
  }, [musicTime])

  return (
    <div className={styles.playerContainer}>
      {console.log(playlist)}
      {console.log(musicInfo)}
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
          <video id="video_relaxante" width="640" height="360" src={videos_lista[selectedVideo]} autoPlay muted loop />
          </div>
          <PlayerControls>
            <Button onClick={handlePlayPause} color="#99AAE7" hover_color="#8695CB">
              <FontAwesomeIcon icon={playIcon === true ? faPause : faPlay} fontSize={30} />
            </Button>
            <Button onClick={handleRestart} color="#A6CBCB" hover_color="#8FAFAF">
              <FontAwesomeIcon icon={faRedoAlt} fontSize={30} />
            </Button>
            <Button onClick={nextMusic} color="#EED38F" hover_color="#D0B87D">
              Proxima
            </Button>
            <Button onClick={previousMusic} color="#FFB774" hover_color="#E2A266">
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

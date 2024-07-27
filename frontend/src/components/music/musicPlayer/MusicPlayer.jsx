import {
  useState,
  useContext,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const MusicPlayer = forwardRef(
  ({ props, link, canPlay, sendTime, ended, isMuted=false }, ref) => {
    // Variaveis:
    const [isPlaying, setIsPlaying] = useState(true);
    const [time, setTime] = useState(0);

    // Refs:
    ref.PlayPauseMusic = () => {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    };

    ref.restartMusic = () => {
      let audio = document.getElementById("audioPlayer");
      if (audio && canPlay) {
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true);
      }
    };

    // Funcoes:
    const playMusic = () => {
      let audio = document.getElementById("audioPlayer");
      if (audio && canPlay) {
        audio.play();
        setIsPlaying(true);
      }
    };

    const pauseMusic = () => {
      let audio = document.getElementById("audioPlayer");
      if (audio && canPlay) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    const setMute = () => {
      let audio = document.getElementById("audioPlayer");
      if (audio && canPlay) {
        audio.muted = isMuted;
      }
    };

    const updateTime = () => {
      setTime(getTimeLeft());
      sendTime(time);
    };

    const getTimeLeft = () => {
      let audio = document.getElementById("audioPlayer");
      if (audio && canPlay) {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        return Math.max(0, duration - currentTime);
      }
      return 0;
    };

    useEffect(() => {
      setMute();
    }, [ref, link, canPlay, time, isMuted]);

    return (
      <audio
        id="audioPlayer"
        src={link}
        autoPlay
        onTimeUpdate={updateTime}
        onEnded={ended}
      ></audio>
    );
  }
);

export default MusicPlayer;

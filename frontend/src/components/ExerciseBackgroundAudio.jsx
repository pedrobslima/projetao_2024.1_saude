import React, { useEffect, useRef } from "react";

const ExerciseBackgroundAudio = ({ src, isPaused, isMuted }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [isPaused]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return <audio ref={audioRef} src={src} loop />;
};

export default ExerciseBackgroundAudio;

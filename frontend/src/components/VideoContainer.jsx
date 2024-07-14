import React, { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./VideoContainer.module.css";
import { useEffect } from "react";

import video from "../assets/videos/exercise_video.mp4";

const VideoContainer = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    },
    pause: () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
    togglePlayPause: () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    },
    getTimeLeft: () => {
      if (videoRef.current) {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        return Math.max(0, duration - currentTime);
      }
      return 0;
    },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.onTimeUpdate && videoRef.current) {
        const timeLeft = ref.current.getTimeLeft();
        props.onTimeUpdate(timeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [props, ref]);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        width="560"
        height="300"
        src={video}
        controls={false}
        autoPlay
      />
    </div>
  );
});

export default VideoContainer;

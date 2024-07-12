import React from "react";
import styles from "./VideoContainer.module.css";

import video from "../assets/videos/exercise_video.mp4";

function VideoContainer() {
  return (
    <div className={styles.videoContainer}>
      <video width="560" height="300" src={video} controls={false} autoPlay>
        {" "}
      </video>
    </div>
  );
}

export default VideoContainer;

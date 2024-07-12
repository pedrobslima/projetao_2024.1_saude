import React from "react";
import styles from "./VideoContainer.module.css";

function VideoContainer({ type }) {
  const videoUrl = [
    "https://www.youtube.com/embed/tf8phrV7Dq0?si=snSzMxorvjcKuPFH",
    "https://www.youtube.com/embed/Ef6LwAaB3_E?si=GRDkqnZ6ZHc4YJgp&amp;start=26",
  ];
  return (
    <div className={styles.videoContainer}>
      <iframe
        width="560"
        height="300"
        src={type === "exercicio" ? videoUrl[1] : videoUrl[0]}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoContainer;

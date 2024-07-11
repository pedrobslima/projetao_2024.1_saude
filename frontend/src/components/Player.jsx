import React from 'react';
import styles from './Player.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import VideoContainer from './VideoContainer';

function Player({ type }) {
  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <div className={styles.header}>
            <h1 className={styles.title}>
              {type === 'exercicio' ? 'Nome do exercício' : 'Relaxe sua mente'}
            </h1>
            <span className={styles.timer}>00:40</span>
        </div>
        <div className={styles.content}>
            <div className={styles.videoContainer}>
              <VideoContainer type={type}/>
            </div>
            <div className={styles.controls}>
            <button className={styles.playButton}>
                <FontAwesomeIcon
                icon={faPlay}
                />
            </button>
            <button className={styles.repeatButton}>
                <FontAwesomeIcon
                icon={faRedoAlt}
                />
            </button>
            <button className={styles.skipButton}>Pular</button>
            <button className={styles.finishLaterButton}>Terminar mais tarde</button>
            </div>
        </div>
        <div className={styles.description}>
            <p>Descrição descrição</p>
            <p>Descrição descrição</p>
        </div>
      </div>
    </div>
  );
}

export default Player;

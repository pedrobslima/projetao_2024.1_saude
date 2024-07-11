import React from 'react';
import styles from './MusicPlayer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import VideoContainer from '../../VideoContainer';
import PlayerHeader from '../../shared/playerHeader/PlayerHeader';
import Controls from '../../shared/playerControls/PlayerControls';
import Button from '../../shared/Button/Button';
import PlayerDescription from '../../shared/playerDescription/PlayerDescription';

function MusicPlayer({type=""}) {
  return (
    <div className={styles.playerContainer}>
      <div>
        <PlayerHeader title="Relaxe sua mente"/>
        <div className={styles.content}>
            <div className={styles.videoContainer}>
              <VideoContainer type={type}/>
            </div>
            <Controls>
              <Button><FontAwesomeIcon icon={faPlay}/></Button>
              <Button><FontAwesomeIcon icon={faRedoAlt}/></Button>
              <Button>Pular</Button>
              <Button>Terminar mais tarde</Button>
            </Controls>
        </div>
        <PlayerDescription>
          <p>Descrição descrição</p>
          <p>Descrição descrição</p>
        </PlayerDescription>
      </div>
    </div>
  );
}

export default MusicPlayer;
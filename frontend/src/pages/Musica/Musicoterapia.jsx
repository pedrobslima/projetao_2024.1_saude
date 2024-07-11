import React from 'react'
import MusicPlayer from '../../components/music/musicPlayer/MusicPlayer';
import styles from "./Musicoterapia.module.css"

function Musicoterapia() {
    return (
        <div className={styles.div}>
            <MusicPlayer/>
        </div>
    );
}

export default Musicoterapia

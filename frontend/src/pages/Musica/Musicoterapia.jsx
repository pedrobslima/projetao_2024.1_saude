import React from 'react'
import MusicPlayer from '../../components/music/musicoterapia/MusicTherapyPage';
import styles from "./Musicoterapia.module.css"

function Musicoterapia() {
    return (
        <div className={styles.div}>
            <MusicPlayer/>
        </div>
    );
}

export default Musicoterapia

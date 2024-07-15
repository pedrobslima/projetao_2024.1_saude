import React, { useRef } from 'react'
import MusicTherapyPage from '../../components/music/musicoterapia/MusicTherapyPage';
import styles from "./Musicoterapia.module.css"

function Musicoterapia() {
    return (
        <div className={styles.div}>
            <MusicTherapyPage/>
        </div>
    );
}

export default Musicoterapia

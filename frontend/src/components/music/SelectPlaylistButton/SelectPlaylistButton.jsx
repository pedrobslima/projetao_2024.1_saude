import React, { useRef } from 'react'
import styles from "./SelectPlaylistButton.module.css"
import { changeUrl } from '../../../utils/utils';

function SelectPlaylistButton({image_src, name}) {
    // Constanttes:
    const baseUrl = "/musica";

    const handleOnClick = () => {
        changeUrl(`${baseUrl}/${name}/0`)
    }

    return (
        <div className={styles.div}>
            <button className={styles.button} onClick={handleOnClick}>
                <img className={styles.img}src={image_src} />
                <p>{name}</p>
            </button>
        </div>
    );
}

export default SelectPlaylistButton
import React, { useRef } from 'react'
import styles from "./SelectPlaylistPage.module.css"
import SelectPlaylistButton from '../../components/music/SelectPlaylistButton/SelectPlaylistButton';

function SelectPlaylistPage() {
    return (
        <div className={styles.div}>
            <div className={styles.buttonCont}>
                <SelectPlaylistButton name="Jazz" image_src="https://miro.medium.com/v2/resize:fit:1358/1*D5rpkXtMU7Q2r-wqx1cAQA.jpeg" />
                <SelectPlaylistButton name="Celta" image_src="https://media.istockphoto.com/id/878879470/pt/foto/banjo-acoustic-guitar-and-fiddle-on-straw.jpg?s=612x612&w=0&k=20&c=B2--5Jmz782b_0Ny026GA9x8MfqKHH6t8h9-v7cKiRk=" />
                <SelectPlaylistButton name="Lofi" image_src="https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_640.png" />
                <SelectPlaylistButton name="HipHop" image_src="https://static.vecteezy.com/system/resources/thumbnails/029/614/650/small_2x/african-american-hip-hop-dancer-performing-on-watercolor-splash-background-neural-network-generated-art-photo.jpg"  />
                <SelectPlaylistButton name="Ambiente" image_src="https://img.freepik.com/fotos-gratis/bela-paisagem-de-um-rio-cercado-por-muito-verde-durante-o-dia_181624-36909.jpg" />
                <SelectPlaylistButton name="Inspirador" image_src="https://img.freepik.com/fotos-gratis/homem-saltar-atraves-de-lacunas-entre-colinas_1150-19693.jpg" />
            </div>
        </div>
    );
}

export default SelectPlaylistPage
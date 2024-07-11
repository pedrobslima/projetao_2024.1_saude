import styles from "./PlayerHeader.module.css"

/*
    Parte de cima do player que exibe um texto e o tempo.
*/
const PlayerHeader = ({title="", time="0:00"}) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.timer}>{time}</span>
        </div>
    )
}

export default PlayerHeader
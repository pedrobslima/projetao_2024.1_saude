import styles from "./PlayerControls.module.css"

/*
    Estrutura de controles dos players.
*/
const PlayerControls = ({ children }) => {
    return (
        <div className={styles.controls}>
            {children}
        </div>
    )
}

export default PlayerControls
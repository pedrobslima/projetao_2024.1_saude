import styles from "./PlayerControls.module.css"

/*
    Estrutura de controles dos players.
*/
const Controls = ({ children }) => {
    return (
        <div className={styles.controls}>
            {children}
        </div>
    )
}

export default Controls
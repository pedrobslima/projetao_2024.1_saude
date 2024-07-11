import styles from "./PlayerDescription.module.css"

const PlayerDescription = ({ children }) => {
    return (
        <div className={styles.description}>
            {children}
        </div>
    )
}

export default PlayerDescription
import styles from "./Button.module.css"

const Button = ({children, props, onClick, color="#d9d9d9", hover_color="#c0c0c0", font_size=1, font_size_type="em"}) => {
    const buttonStyle = {
        "--color": color,
        "--hover_color": hover_color,
        "--font_size": font_size+font_size_type 
    }
    return (
        <button {...props} onClick={onClick} className={styles.button} style={buttonStyle}>
            {children}
        </button>
    )
}

export default Button
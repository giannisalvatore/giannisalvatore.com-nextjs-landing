import styles from "./button.module.css"

export default function Button({
    onClick,
    children,
}) {
    return <button onClick={onClick} className={styles.button}>{children}</button>
}
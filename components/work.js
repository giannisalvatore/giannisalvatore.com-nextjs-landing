import styles from "./work.module.css";

export default function Work({ data }) {
    return <div className={styles.work}>
        <img src={data.image} className={styles.cover}></img>
        <div className={styles.info}>
            <div className={styles.left}>
                <h2>{data.title}</h2>
            </div>
            <div className={styles.right}>
                <p className={styles.description}>{data.description}</p>
            </div>
        </div>
    </div>
}
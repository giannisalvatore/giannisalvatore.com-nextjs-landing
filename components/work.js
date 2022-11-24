import Image from "next/image";

import styles from "./work.module.css";

export default function Work({ data }) {
    return (
        <div className={styles.work}>
            <div className={styles.coverContainer}>
                <Image
                    src={data.image}
                    className={styles.cover}
                    blurDataURL={data.placeholder.base64}
                    placeholder="blur"
                    layout="responsive"
                    width={1812}
                    height={855}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.left}>
                    <p className={styles.jobTitle}>{data.title}</p>
                    <p className={styles.date}>{data.job.date}</p>
                    <p className={styles.description}>{data.description}</p>
                </div>
                <div className={styles.right}>
                    <ul className={styles.tasks}>
                        {data.job.tasks.map((task) => (
                            <li>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

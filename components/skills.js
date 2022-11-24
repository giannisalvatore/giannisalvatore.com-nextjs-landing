import styles from "./skills.module.css";

export default function Skills() {
    return (
        <div className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <ul>
                        <li>Project management</li>
                        <li>Team management</li>
                        <li>Critique thinker</li>
                        <li>Proficient comunicator</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <ul>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Vanilla JS</li>
                        <li>HTML / CSS</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <ul>
                        <li>Node.js (+ packages)</li>
                        <li>PHP</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <ul>
                        <li>AWS</li>
                        <li>Digital Ocean</li>
                        <li>Google Cloud</li>
                        <li>PlanetScale</li>
                        <li>Fly.io</li>
                        <li>Scaleway</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

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
                        <li>Javascript (ES6)</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <ul>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
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
                <div className={styles.col}>
                    <ul>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>Sketch</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Premiere</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

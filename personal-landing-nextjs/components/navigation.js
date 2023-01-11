import { TwitterFill, LinkedinBoxFill, ArrowRight } from "akar-icons";

import Button from "./button";

import styles from "./navigation.module.css";

export default function Navigation() {
    return <>
        <div className={styles.top}>
            <div className={styles.profile}>
                <img src="/images/profile_pic.jpg" />
                <div>
                    <div className={styles.name}>Gianni Salvatore</div>
                    <div className={styles.username}>@sirgi__</div>
                </div>
            </div>
            <div className={styles.socialLinks}>
                <div className={styles.link}>
                    <LinkedinBoxFill size={18} />
                    Linkedin
                </div>
                <div className={styles.link}>
                    <TwitterFill size={18} />
                    Twitter
                </div>
            </div>

        </div>
        <div className={styles.bottom}>
            <div className={styles.item}>
                Works
            </div>
            <div className={styles.line} />
            <div className={styles.item}>
                Skills
            </div>
            <div className={styles.item}>
                <Button>Contact me <ArrowRight size={18} /></Button>
            </div>
        </div>
    </>
}
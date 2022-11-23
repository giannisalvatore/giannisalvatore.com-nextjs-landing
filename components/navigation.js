import { TwitterFill, LinkedinBoxFill, ArrowRight } from "akar-icons";

import Button from "./button";
import { motion } from "framer-motion"

import styles from "./navigation.module.css";

export default function Navigation() {
    return <>
        <div className={styles.top}>
            <motion.div
                className={styles.profile}
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
            >
                <img
                    src="/images/profile_pic.jpg"
                />
                <div
                >
                    <div className={styles.name}>Gianni Salvatore</div>
                    <div className={styles.username}>@sirgi__</div>
                </div>
            </motion.div>
            <motion.div
                className={styles.socialLinks}
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className={styles.link} >
                    <LinkedinBoxFill size={18} />
                    Linkedin
                </div>
                <div className={styles.link}>
                    <TwitterFill size={18} />
                    Twitter
                </div>
            </motion.div>

        </div>
        <div
            className={styles.bottom}
        >
            <motion.div
                className={styles.panel}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
            >
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
            </motion.div>
        </div>
    </>
}
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";

import styles from "./hero.module.css";

export default function Hero() {
    const variants = {
        start: (i) => ({
            rotate: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
            transition: {
                delay: 0.05,
                repeat: 1,
                duration: 1,
            }
        }),
        reset: {
            rotate: 0
        }
    };

    const controls = useAnimation();

    useEffect(() => {
        controls.start("start");
    }, [])

    return <div
        className={styles.hero}
    >
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h1>Hi, i’m Gianni <motion.div variants={variants} animate={controls}>👋</motion.div></h1>
            <p>A Full stack developer with design in mind</p>
        </motion.div>
    </div>
}
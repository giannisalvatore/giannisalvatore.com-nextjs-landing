import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import BackgroundImage from "/public/images/bg.png";

import styles from "./hero.module.css";

export default function Hero() {
    const variants = {
        start: (i) => ({
            rotate: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
            transition: {
                delay: 0.05,
                repeat: 1,
                duration: 1,
            },
        }),
        reset: {
            rotate: 0,
        },
    };

    const controls = useAnimation();

    useEffect(() => {
        controls.start("start");
    }, []);

    return (
        <>
            <Image src={BackgroundImage} layout="fill" placeholder="blur" />
            <motion.div
                className={styles.hero}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.insideHero}>
                    <div className={styles.topTitle}>Hi, my name is</div>
                    <h1>
                        Gianni Salvatore{" "}
                        <motion.div variants={variants} animate={controls}>
                            👋
                        </motion.div>
                    </h1>
                    <p>
                        I'm a full stack developer specializing in building and
                        designing exceptional digital experiences.
                    </p>
                </div>
            </motion.div>
        </>
    );
}

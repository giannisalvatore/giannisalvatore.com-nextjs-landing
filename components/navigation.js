import { TwitterFill, LinkedinBoxFill, ArrowRight } from "akar-icons";
import Image from "next/image";

import Button from "./button";
import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import ProfilePic from "/public/images/profile_pic.jpg";

import styles from "./navigation.module.css";

export default function Navigation() {
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);

    const variantsTop = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -200 },
    };
    const variantsBottom = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
    };

    function update() {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }

    useEffect(() => {
        return scrollY.onChange(() => update());
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className={styles.top}
                initial={"hidden"}
                animate={hidden ? "hidden" : "visible"}
                exit={"hidden"}
                transition={{ duration: 1.2 }}
                variants={variantsTop}
            >
                <div className={styles.profile}>
                    <Image
                        src={ProfilePic}
                        placeholder="blur"
                        layout="responsive"
                        width={40}
                        height={40}
                    />
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
            </motion.div>
            <div className={styles.bottom}>
                <motion.div
                    className={styles.panel}
                    initial={"hidden"}
                    animate={hidden ? "hidden" : "visible"}
                    exit={"hidden"}
                    transition={{ duration: 1.2 }}
                    variants={variantsBottom}
                >
                    <div className={styles.item}>Works</div>
                    <div className={styles.line} />
                    <div className={styles.item}>Skills</div>
                    <div className={styles.item}>
                        <Button>
                            Contact me <ArrowRight size={18} />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

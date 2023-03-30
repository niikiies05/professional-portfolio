import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Link from "next/link";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.heroContent}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={styles.heroTitle}>
                    Welcome to Startup Landing!
                    Get free landing pages every week.
                </h1>
                <p className={styles.heroDescription}>
                    We’ve brought you a great collection of absolutely free landing pages built with React, Next JS & Gatsby JS. Every week, we’ll be adding top of the line Startup Landing demos to our collection.
                </p>
                <motion.div
                    // className={styles.heroButton}
                    // style={{display: 'none'}}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link href="#footer" className={styles.heroButton}>Contactez-moi !</Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

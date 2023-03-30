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
                    Bienvenue sur mon portfolio!
                    Une nouvelle expérience du Web.
                </h1>
                <p className={styles.heroDescription}>
                    Je suis un développeur Fullstack avec une expertise dans la création de sites web, d'applications web et de logiciels. J'ai de solides compétences en langages de programmation front-end et back-end, ainsi qu'en résolution de problèmes et en gestion de projets. 
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

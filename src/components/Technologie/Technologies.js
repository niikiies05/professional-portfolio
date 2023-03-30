import React from 'react';
import styles from './Technologies.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { technologiesData } from '../constants/technologies';

const Technologies = () => {
    return (
        <section className={styles.technologies} id="technologie">
            <h2 className={styles.technologiesTitle}>Built With Most Advanced Tools</h2>
            <div className={styles.techGrid}>
                {technologiesData.map((tech, index) => (
                    <motion.div
                        className={styles.techItem}
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <FontAwesomeIcon icon={tech.icon} className={styles.techIcon} />
                        <h3 className={styles.techName}>{tech.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;

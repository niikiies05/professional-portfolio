import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {servicesData} from "@/constants/services";

const Services = () => {

    return (
        <section className={styles.services}>
            <div className={styles.header}>
                <h2 className={styles.servicesTitle}>Services Sur Mesure...</h2>
                <p className={styles.serviceHeaderDescription}>Explorez mes services personnalisés, conçus pour transformer vos idées en réalités époustouflantes. Bénéficiez de mon expertise dans divers domaines, tels que la conception graphique, le développement web, la stratégie de marque et bien d'autres encore.</p>
            </div>
            <div className={styles.servicesList}>
                {servicesData.map((service, index) => (
                    <motion.div
                        className={styles.serviceItem}
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className={styles.serviceIcon}>
                            <FontAwesomeIcon icon={service.icon} />
                        </div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;

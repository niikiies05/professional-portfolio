import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {servicesData} from "@/components/constants/services";

const Services = () => {

    return (
        <section className={styles.services}>
            <h2 className={styles.servicesTitle}>More On The Way...</h2>
            <p className={styles.serviceHeaderDescription}>Every week, We will add super fast mobile optimized demos on different niches from our collection. You will fall in love with our rich tech choice.</p>
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

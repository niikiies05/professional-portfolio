import React from 'react';
import styles from './DetailsBlog.module.css';
import { motion } from 'framer-motion';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlogModal = ({ blog, handleClose }) => {
    return (
        <div className={styles.blogModalWrapper}>
            <div className={styles.blogModalBackdrop} onClick={handleClose} />
            <motion.div
                className={styles.blogModalContent}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className={styles.blogModalHeader}>
                    <h3 className={styles.blogModalTitle}>{blog.title}</h3>
                    <button className={styles.blogModalCloseButton} onClick={handleClose}>
                        <i className="fas fa-times" />
                    </button>
                </div>
                    <div  className={styles.blogModalBody}>
                        <img src={blog.image} alt={blog.title} className={styles.blogModalImage} />
                        {blog.content.map((cont, index) => (
                            <div key={index} className={styles.blogModalDescription}>
                                <p>{cont}</p>
                            </div>
                        ))}
                    </div>

            </motion.div>
        </div>
    );
};

export default BlogModal;

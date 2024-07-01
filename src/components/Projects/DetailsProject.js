import React from 'react';
import styles from './Details.module.css';

const DetailsProject = ({ project, handleClose }) => {
    return (
        <div className="">
            <div className={styles.modalHeader}>
                <h2>{project.title}</h2>
                {/*<button onClick={handleClose} className={styles.closeButton}>*/}
                {/*    &times;*/}
                {/*</button>*/}
            </div>
            <div className={styles.modalBody}>
                <div className={styles.modalImages}>
                    {project.images.map((image, index) => (
                        <img key={index} src={image} alt={project.title} />
                    ))}
                </div>
                <div className={styles.modalDescription}>
                    <h3>Description:</h3>
                    <p>{project.description}</p>
                </div>
            </div>
            <div className={styles.modalFooter}>
                {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">
                    Code source
                </a>}
                {project.visit && <a href={project.visit} target="_blank" rel="noopener noreferrer">
                    Voir le projet en ligne
                </a>}
            </div>
        </div>
    );
};

export default DetailsProject;

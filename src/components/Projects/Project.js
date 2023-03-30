import React from 'react';
import styles from './Project.module.css';
import { motion } from 'framer-motion';
import {projectsData} from '../constants/projects';
import DetailsProject from './DetailsProject';

const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };
    return (
        <section className={styles.projects} id="projets">
            <h2 className={styles.projectsTitle}>Découvrez Mes Projets Innovants et Captivants!</h2>
            <p className={styles.projectsDescription}>Mon portfolio est un écrin de projets variés et inspirants, reflétant mon expertise en matière de conception, de développement et de stratégie. Découvrez des solutions sur mesure, façonnées pour répondre aux besoins uniques de chaque client!</p>
            <div className={styles.projectsGrid}>
                {projectsData.map((project, index) => (
                    <motion.div
                        className={styles.projectCard}
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => handleOpen(project)}
                    >
                        <img src={project.miniature} alt={project.title} className={styles.projectImage} />
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            {/*<p className={styles.projectDescription}>{project.description}</p>*/}
                            <div className={styles.projectTags}>
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className={styles.projectTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.projectLinks}>
                                <a href={project.source} target="_blank" rel="noreferrer" className={styles.projectLinkRight}>
                                    Code source
                                </a>
                                <a href={project.visit} target="_blank" rel="noreferrer" className={styles.projectLinkLeft}>
                                    Visiter le site
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            {selectedProject && (
                <DetailsProject project={selectedProject} handleClose={handleClose} />
            )}
        </section>
    );
};

export default Projects;







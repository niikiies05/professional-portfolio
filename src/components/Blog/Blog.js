import React from 'react';
import styles from './Blog.module.css';
import { motion } from 'framer-motion';
import { blogData } from '@/constants/blogs';
import BlogModal from './DetailsBlog';
import DetailsProject from "@/components/Projects/DetailsProject";
import ModalContainer from "@/components/Common/ModalContainer";

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = React.useState(null);
    const handleOpen = (blog) => {
        setSelectedBlog(blog);
    };

    const handleClose = () => {
        setSelectedBlog(null);
    };

    return (
        <section className={styles.blog} id="blog">
            <h2 className={styles.blogTitle}>Derniers Articles du Blog</h2>
            <div className={styles.blogGrid}>
                {blogData.map((blog, index) => (
                    <motion.div
                        className={styles.blogCard}
                        key={blog.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => handleOpen(blog)}
                    >
                        <div className={styles.blogImageWrapper}>
                            <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                        </div>
                        <div className={styles.blogContent}>
                            <h3 className={styles.blogTitle}>{blog.title}</h3>
                            <p className={styles.blogDescription}>{blog.description}</p>
                            <span className={styles.blogDate}>{blog.date}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            {selectedBlog && (
                <ModalContainer
                    closeModal={handleClose}
                    show={selectedBlog}
                    title={""}
                    footer={[]}
                    modalStyles={{ top: 10 }}
                    width={1400}
                >
                    <BlogModal blog={selectedBlog} handleClose={handleClose} />
                </ModalContainer>

            )}
            <div className={styles.viewAllButtonWrapper}>
                <button className={styles.viewAllButton}>Voir tous les articles</button>
            </div>
        </section>
    );
};

export default Blog;
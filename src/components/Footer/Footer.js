import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import {linkData} from "@/constants/blogs";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <Link href="/" legacyBehavior passHref>
                        <a><img src="/images/logo.svg" alt="Logo" className={styles.logo} /></a>
                    </Link>
                </div>
                <nav className={styles.footerNav}>
                    <ul className={styles.footerNavList}>
                        <li className={styles.footerNavItem}>
                            <Link href="/" className={styles.footerNavLink}>Accueil</Link>
                        </li>
                        <li className={styles.footerNavItem}>
                            <Link href="#technologie" className={styles.footerNavLink}>Technologie</Link>
                        </li>
                        <li className={styles.footerNavItem}>
                            <Link href="#projets" className={styles.footerNavLink}>Projets</Link>
                        </li>
                        <li className={styles.footerNavItem}>
                            <Link href="#blog" className={styles.footerNavLink}>Blog</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.footerContact}>
                    <div className={styles.footerContactItem}>
                        <span className={styles.footerContactIcon}><i className="fas fa-envelope"></i></span>
                        <a href="mailto:maximilienkassi05@gmail.com" className={styles.footerContactLink}>maximilienkassi05@gmail.com</a>
                    </div>
                    <div className={styles.footerContactItem}>
                        <span className={styles.footerContactIcon}><i className="fas fa-phone"></i></span>
                        <a href="tel:+2250748803210" className={styles.footerContactLink}>+2250748803210</a>
                    </div>
                </div>
                <div className={styles.footerSocial}>
                    <a href={linkData.github} target="_blank" rel="noopener noreferrer" className={styles.footerIconLink}>
                        <FontAwesomeIcon icon={faGithub} className={styles.footerIcon} />
                    </a>
                    <a href={linkData.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerIconLink}>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.footerIcon} />
                    </a>
                    <a href={linkData.instagram} target="_blank" rel="noopener noreferrer" className={styles.footerIconLink}>
                        <FontAwesomeIcon icon={faInstagram} className={styles.footerIcon} />
                    </a>
                    <a href={linkData.twitter} target="_blank" rel="noopener noreferrer" className={styles.footerIconLink}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.footerIcon} />
                    </a>
                </div>
            </div>
            <div className={styles.footerCopy}>
                <p>© {currentYear} <span className={styles.footerCopyLogo}>Maximilien Kassi</span>. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;

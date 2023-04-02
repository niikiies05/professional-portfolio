import React, {useState} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Header.module.css';
import {linkData} from "@/constants/blogs";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className={styles.header} id="header">
            <div className={styles.logoContainer}>
                <Link href="/" legacyBehavior passHref>
                    <a><img src="/images/logo.svg" alt="Logo" className={styles.logo} /></a>
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={`${styles.navList} ${navOpen ? 'active' : ''}`}>
                    <li className={styles.navItem}>
                        <Link href="/" className={styles.navLink}></Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#technologie" className={styles.navLink}>
                            Technologie
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#projets" className={styles.navLink}>Projets</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#blog" className={styles.navLink}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.socialIcons}>
                <a href={linkData.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </a>
                {/*<a href={linkData.instagram} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>*/}
                {/*    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />*/}
                {/*</a>*/}
                <a href={linkData.linkedin} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </a>
                <div className={styles.menuIcon} onClick={toggleNav}>
                    <div className={styles.menuBar}></div>
                    <div className={styles.menuBar}></div>
                    <div className={styles.menuBar}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;

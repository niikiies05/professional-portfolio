import React from 'react';
import styles from './Contact.module.css';
// import { motion } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = React.useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);

        // Envoie le formulaire ici en utilisant les informations saisies
        const { name, email, phone, subject, message } = formState;
        const mailtoLink = `mailto:contact@monentreprise.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AInformations de contact :%0ANom : ${encodeURIComponent(name)}%0AEmail : ${encodeURIComponent(email)}%0ATéléphone : ${encodeURIComponent(phone)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.contactTitle}>Entrons en contact</h2>
            <div className={styles.contactContent}>
                <div className={styles.contactFormWrapper}>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Adresse e-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Numéro de téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Objet</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className={styles.submitButton} type="submit">
                            Envoyer
                        </button>
                    </form>
                </div>
                <div className={styles.contactDetailsWrapper}>
                    <div className={styles.contactDetails}>
                        <h3 className={styles.contactDetailsTitle}>Coordonnées</h3>
                        <ul className={styles.contactDetailsList}>
                            <li className={styles.contactDetailsItem}>
                                <i className="fas fa-envelope" />
                                <a href={`mailto:${formState.email}`}>{formState.email}</a>
                            </li>
                            <li className={styles.contactDetailsItem}>
                                <i className="fas fa-phone" />
                                <a href={`tel:${formState.phone}`}>{formState.phone}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Location Section */}
                    <div className={styles.footerSection}>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>

                    {/* Around the Web Section */}
                    <div className={styles.footerSection}>
                        <h3>AROUND THE WEB</h3>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialIcon}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className={styles.socialIcon}>
                                <i className="fas fa-basketball-ball"></i>
                            </a>
                        </div>
                    </div>

                    {/* About Freelancer Section */}
                    <div className={styles.footerSection}>
                        <h3>ABOUT FREELANCER</h3>
                        <p>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by{' '}
                            <a href="https://startbootstrap.com" className={styles.link}>
                                Start Bootstrap
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.container}>
                    <small>Copyright © Your Website 2023</small>
                </div>
            </div>
        </footer>
    )
}

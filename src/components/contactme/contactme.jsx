import React from 'react'
import styles from './contactme.module.css'

export default function ContactMe() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className="text-center fw-bold mb-3">CONTACT ME</h2>
        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.star}>
            <i className="fas fa-star" aria-hidden="true"></i>
          </span>
          <span className={styles.line} />
        </div>
        
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Full name" 
                className={styles.formControl}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <input 
                type="email" 
                placeholder="Email address" 
                className={styles.formControl}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <input 
                type="tel" 
                placeholder="Phone number" 
                className={styles.formControl}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea 
                placeholder="Message" 
                className={styles.formControl}
                rows="5"
                required 
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className="text-white text-center fw-bold mb-3">ABOUT</h2>
        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.star}>
            <i className="fas fa-star" aria-hidden="true"></i>
          </span>
          <span className={styles.line} />
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 mb-4">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-lg-6">
            <p className="text-white">
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>
          <div className="buttoni col-12 d-flex justify-content-center mt-4">
                <button type="button" className="btn btn-outline-light">
                  <i className="fas fa-download me-2"></i>
                  Free download
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

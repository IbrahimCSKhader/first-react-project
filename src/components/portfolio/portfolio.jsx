import React from 'react'
import styles from './portfolio.module.css'

export default function Portfolio() {
	return (
  <section className={styles.portfolio}>
      <div className={styles.content}>
        <h2 className="text-center fw-bold mb-5">PORTFOLIO</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
        </div>
        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.star}>
             <i className="fas fa-star" aria-hidden="true"></i>
          </span>
                <span className={styles.line} />
              </div>
              <div className={`${styles.images} row `}>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/images/cabin.png" alt="Cabin" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/images/cake.png" alt="Cake" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/images/circus.png" alt="Circus" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/images/game.png" alt="Game" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/images/safe.png" alt="Safe" className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/images/submarine.png" alt="Submarine" className="img-fluid rounded shadow-sm" />
                </div>

              </div>
      </div>
  </section>
	)
}

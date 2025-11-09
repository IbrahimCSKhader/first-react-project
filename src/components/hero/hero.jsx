import React from 'react'
import styles from './hero.module.css'

export default function Hero() {
	return (
		<section className={styles.container || ''}>
            <div className="mainPortfolio d-flex justify-content-center align-items-center flex-column  ">
                <img className='m-3' src="avataaars.svg" alt="" />
                <h2 className='text-white fw-bold'>START BOOTSTRAP</h2>
            </div>
            <div className={styles.divider}>
                <span className={styles.line} />
                <span className={styles.star}>
                    <i className="fas fa-star" aria-hidden="true"></i>
                </span>
                <span className={styles.line} />
            </div>
            <div className="something d-flex justify-content-center align-items-center ">
                <h3 className='text-white fw-semibold m-3'>Graphic Artist - Web Designer - Illustrator</h3>
            </div>
		</section>
	)
}

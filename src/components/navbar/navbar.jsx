import React from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
	return (
		<nav className={`${styles.container} d-flex justify-content-between align-items-center text-white px-5 py-5`}>
			
			<h1 className="fw-bold m-0">START BOOTSTRAP</h1>

			<div className="d-flex gap-4 fw-semibold align-items-center">
				<a href="#!" className="text-decoration-none text-white">PORTFOLIO</a>
				<a href="#!" className="text-decoration-none text-white">ABOUT</a>
				<a href="#!" className="text-decoration-none text-white">CONTACT</a>
			</div>
			
		</nav>
	)
}

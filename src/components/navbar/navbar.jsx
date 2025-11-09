import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={`${styles.container} d-flex justify-content-between align-items-center text-white px-5 py-5`}>
    <Link to="/" className="text-decoration-none text-white">      <h1 className="fw-bold m-0">START BOOTSTRAP</h1>
</Link>


      <div className="d-flex gap-4 fw-semibold align-items-center">
        <Link to="/portfolio" className="text-decoration-none text-white">PORTFOLIO</Link>
        <Link to="/hero" className="text-decoration-none text-white">HERO</Link>
        <Link to="/about" className="text-decoration-none text-white">ABOUT</Link>
        <Link to="/contact" className="text-decoration-none text-white">CONTACT</Link>
      </div>
      
    </nav>
  );
}

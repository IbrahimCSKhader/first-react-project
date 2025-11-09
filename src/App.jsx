import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import About from './components/about/about.jsx';
import ContactMe from './components/contactme/contactme.jsx';
import Footer from './components/footer/footer.jsx';


function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <ContactMe />
    </>
  );
}

export default function App() {
  return (
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>

        <Footer />
      </div>
  );
}

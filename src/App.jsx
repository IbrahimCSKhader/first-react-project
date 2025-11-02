import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import About from './components/about/about.jsx'
import ContactMe from './components/contactme/contactme.jsx'
import Footer from './components/footer/footer.jsx'

export default function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Portfolio />
			<About />
			<ContactMe />
			<Footer />
		</div>
	)
}


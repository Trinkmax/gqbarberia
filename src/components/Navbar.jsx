import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ isBookingPage = false }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        setMenuOpen(false)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    if (isBookingPage) {
        return (
            <nav className="navbar scrolled">
                <div className="nav-container">
                    <Link to="/" className="logo">
                        <img src="/assets/logo.png" alt="Mónaco Barber Studio Logo" className="logo-img" />
                        <span className="logo-text">Mónaco<span className="gold">Studio</span></span>
                    </Link>
                    <Link to="/" className="back-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                        Volver al inicio
                    </Link>
                </div>
            </nav>
        )
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo">
                    <img src="/assets/logo.png" alt="Mónaco Barber Studio Logo" className="logo-img" />
                    <span className="logo-text">Mónaco<span className="gold">Studio</span></span>
                </Link>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#inicio" className="nav-link active" onClick={() => scrollToSection('inicio')}>Inicio</a></li>
                    <li><a href="#nosotros" className="nav-link" onClick={() => scrollToSection('nosotros')}>Nosotros</a></li>
                    <li><a href="#servicios" className="nav-link" onClick={() => scrollToSection('servicios')}>Servicios</a></li>
                    <li><a href="#sucursales" className="nav-link" onClick={() => scrollToSection('sucursales')}>Sucursales</a></li>
                    <li><a href="#contacto" className="nav-link" onClick={() => scrollToSection('contacto')}>Contacto</a></li>
                    {/* Mobile-only CTA inside drawer */}
                    <li className="nav-cta-mobile">
                        <Link to="/reservar" className="primary-btn" onClick={() => setMenuOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            Reservar Turno
                        </Link>
                    </li>
                </ul>
                <Link to="/reservar" className="cta-btn nav-cta">
                    <span>Reservar Turno</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
                <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    )
}

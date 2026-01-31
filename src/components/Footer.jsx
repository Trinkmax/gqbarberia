import { Link } from 'react-router-dom'

const PHONE = '5493517468957'
const INSTAGRAM = 'https://www.instagram.com/gq_barberia/'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="logo-text">GQ<span className="gold">Barbería</span></span>
                        <p className="footer-tagline">Tu barbero de confianza en Nueva Córdoba.</p>
                        <p className="footer-barber">Gastón Quiroga</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#sobre-mi">Sobre Mí</a></li>
                                <li><a href="#servicios">Servicios</a></li>
                                <li><a href="#ubicacion">Ubicación</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Servicios</h4>
                            <ul>
                                <li><a href="#servicios">Corte Clásico</a></li>
                                <li><a href="#servicios">Corte + Barba</a></li>
                                <li><a href="#servicios">Diseño de Barba</a></li>
                                <li><a href="#servicios">Afeitado Clásico</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Contacto</h4>
                            <ul>
                                <li>San Lorenzo 445</li>
                                <li>Nueva Córdoba, Córdoba</li>
                                <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@gq_barberia</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 GQ Barbería - Gastón Quiroga.</p>
                    <p>Diseñado con <span className="heart">♥</span></p>
                </div>
            </div>
        </footer>
    )
}

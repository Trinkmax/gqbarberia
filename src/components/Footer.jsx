import { Link } from 'react-router-dom'

const INSTAGRAM = 'https://www.instagram.com/monaco_barberstudio/'

const SUCURSALES = [
    {
        name: 'Mónaco 3',
        address: 'Rondeau 30, Córdoba',
        phone: '+54 351 748-2277',
        phoneWa: '5493517482277',
    },
    {
        name: 'Mónaco Paraná',
        address: 'Paraná 419, Córdoba',
        phone: '+54 9 351 769-1830',
        phoneWa: '5493517691830',
    }
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="logo-text">Mónaco<span className="gold">Studio</span></span>
                        <p className="footer-tagline">Tu barbería premium en Córdoba.</p>
                        <p className="footer-barber">Barber Studio · 2 Sucursales</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navegación</h4>
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#nosotros">Nosotros</a></li>
                                <li><a href="#servicios">Servicios</a></li>
                                <li><a href="#sucursales">Sucursales</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Servicios</h4>
                            <ul>
                                <li><a href="#servicios">Corte Clásico</a></li>
                                <li><a href="#servicios">Corte + Barba</a></li>
                                <li><a href="#servicios">Tratamiento Facial</a></li>
                                <li><a href="#servicios">Masaje Capilar</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Sucursales</h4>
                            <ul>
                                {SUCURSALES.map((s, i) => (
                                    <li key={i}>
                                        <strong>{s.name}</strong><br />
                                        {s.address}
                                    </li>
                                ))}
                                <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@monaco_barberstudio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Mónaco Barber Studio. Todos los derechos reservados.</p>
                    <p>Diseñado con <span className="heart">♥</span></p>
                </div>
            </div>
        </footer>
    )
}

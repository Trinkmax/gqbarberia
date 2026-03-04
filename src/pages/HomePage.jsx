import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingButton from '../components/FloatingButton'

const INSTAGRAM = 'https://www.instagram.com/monaco_barberstudio/'

const SUCURSALES = [
    {
        id: 'monaco-3',
        name: 'Mónaco 3',
        subtitle: 'Barber Studio',
        address: 'Rondeau 30, Córdoba',
        rating: '5.0',
        ratingStars: 5,
        phone: '+54 351 748-2277',
        phoneWa: '5493517482277',
        hours: 'Lun - Sáb: 10:00 a 21:00 hs',
        closedDay: 'Domingos cerrado',
        mapsUrl: 'https://maps.google.com/?q=Rondeau+30,+Córdoba,+Argentina',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8!2d-64.19!3d-31.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRondeau+30+Córdoba!5e0!3m2!1ses-419!2sar',
    },
    {
        id: 'monaco-parana',
        name: 'Mónaco',
        subtitle: 'Barber Studio',
        address: 'Paraná 419, Córdoba',
        rating: '4.8',
        ratingStars: 5,
        phone: '+54 9 351 769-1830',
        phoneWa: '5493517691830',
        hours: 'Lun - Sáb: 10:00 a 21:00 hs',
        closedDay: 'Domingos cerrado',
        mapsUrl: 'https://maps.google.com/?q=Paraná+419,+Córdoba,+Argentina',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8!2d-64.18!3d-31.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sParaná+419+Córdoba!5e0!3m2!1ses-419!2sar',
    }
]

const services = [
    { id: 'corte-clasico', name: 'Corte Clásico', desc: 'Corte tradicional con tijera y máquina, incluye lavado y peinado profesional.', duration: '30 min', price: '$14.000', icon: 'scissors' },
    { id: 'corte-barba', name: 'Corte + Barba', desc: 'Combo completo: corte de cabello, perfilado y diseño de barba moderno.', duration: '50 min', price: '$16.000', featured: true, icon: 'combo' },
    { id: 'diseno-barba', name: 'Diseño de Barba', desc: 'Perfilado, diseño y tratamiento para una barba impecable y definida.', duration: '25 min', price: '$8.000', icon: 'beard' },
    { id: 'tratamiento-facial', name: 'Tratamiento Facial', desc: 'Limpieza facial profunda con productos premium para un rostro renovado.', duration: '40 min', price: '$12.000', icon: 'facial' },
    { id: 'masaje-capilar', name: 'Masaje Capilar', desc: 'Masaje terapéutico capilar que estimula el crecimiento y relaja.', duration: '20 min', price: '$7.000', icon: 'massage' },
    { id: 'tratamiento-capilar', name: 'Tratamiento Capilar', desc: 'Tratamiento especializado para revitalizar y fortalecer tu cabello.', duration: '35 min', price: '$10.000', icon: 'treatment' },
]

const barbers = [
    { name: 'Barbero 1', role: 'Barbero Senior', specialty: 'Fades & Diseño' },
    { name: 'Barbero 2', role: 'Barbero Senior', specialty: 'Cortes Clásicos' },
    { name: 'Barbero 3', role: 'Barbero', specialty: 'Barba & Afeitado' },
    { name: 'Barbero 4', role: 'Barbero', specialty: 'Mullets & Modernos' },
    { name: 'Barbero 5', role: 'Barbero', specialty: 'Tratamientos Capilares' },
    { name: 'Barbero 6', role: 'Barbero', specialty: 'Tratamientos Faciales' },
]

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// SVG Icon Components
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
)

const ServiceIconComponent = ({ type }) => {
    const icons = {
        scissors: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>,
        combo: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>,
        beard: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="5" /><path d="M5 11c0 4 3 7.5 7 10 4-2.5 7-6 7-10" /><path d="M12 14v7" /></svg>,
        facial: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
        massage: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>,
        treatment: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M12 2v4" /><path d="M3 10h18" /><path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /><path d="M9 14l2 2 4-4" /></svg>,
    }
    return icons[type] || icons.scissors
}

export default function HomePage() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero" id="inicio">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        2 Sucursales en Córdoba
                    </div>
                    <h1 className="hero-title">
                        <span className="line">Mónaco</span>
                        <span className="line">Barber <span className="gold">Studio</span></span>
                    </h1>
                    <p className="hero-subtitle">
                        La experiencia de barbería premium que merecés. 6 barberos profesionales,
                        dos sucursales en Córdoba y un ambiente donde cada detalle está pensado para vos.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/reservar" className="primary-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            Reservar Turno
                        </Link>
                        <button className="secondary-btn" onClick={() => scrollToSection('servicios')}>Ver Servicios</button>
                    </div>
                    <div className="hero-features">
                        <div className="feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>2 Sucursales</span>
                        </div>
                        <div className="feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            <span>6 Barberos</span>
                        </div>
                        <div className="feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <span>Hasta las 21 hs</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-wrapper">
<<<<<<< HEAD
                        <img src="/assets/exterior-monaco.jpg" alt="Barbería GQ Interior" className="hero-image" />
=======
                        <img src="/assets/hero-barber.png" alt="Mónaco Barber Studio Interior" className="hero-image" />
>>>>>>> 13483d8fc511f34a5c0db3a226e45ccc6e734d9b
                        <div className="floating-card card-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <span>5 ★ en Google</span>
                        </div>
                        <div className="floating-card card-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                            <span>Calidad Garantizada</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About / Nosotros Section */}
            <section className="about" id="nosotros">
                <div className="container">
                    <div className="about-content">
                        <div className="about-image">
<<<<<<< HEAD
                            <img src="/assets/corte-monaco.webp" alt="Gastón Quiroga - Barbero Profesional" />
=======
                            <img src="/assets/hero-barber.png" alt="Mónaco Barber Studio - Equipo Profesional" />
>>>>>>> 13483d8fc511f34a5c0db3a226e45ccc6e734d9b
                            <div className="about-badge">
                                <span className="badge-name">Mónaco</span>
                                <span className="badge-role">Barber Studio</span>
                            </div>
                        </div>
                        <div className="about-info">
                            <span className="section-badge">Nosotros</span>
                            <h2 className="section-title">Somos <span className="gold">Mónaco</span></h2>
                            <p className="about-text">Somos un equipo de 6 barberos profesionales apasionados por el oficio. En Mónaco Barber Studio te ofrecemos mucho más que un simple corte: una experiencia completa donde cada detalle importa.</p>
                            <p className="about-text">Con dos sucursales en Córdoba y horario corrido hasta las 21:00 hs, nos adaptamos a tu agenda. Trabajamos con productos de calidad y técnicas actualizadas para que salgas siempre renovado.</p>
                            <div className="about-highlights">
                                <div className="highlight">
                                    <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
                                    <div className="highlight-text"><span className="highlight-title">6 Barberos</span><span className="highlight-desc">Equipo profesional</span></div>
                                </div>
                                <div className="highlight">
                                    <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                                    <div className="highlight-text"><span className="highlight-title">2 Sucursales</span><span className="highlight-desc">En Córdoba</span></div>
                                </div>
                                <div className="highlight">
                                    <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                                    <div className="highlight-text"><span className="highlight-title">10 a 21 hs</span><span className="highlight-desc">Horario corrido</span></div>
                                </div>
                            </div>
                            <Link to="/reservar" className="primary-btn">Reservar Turno <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Nuestro Equipo</span>
                        <h2 className="section-title">6 Barberos <span className="gold">Profesionales</span></h2>
                        <p className="section-subtitle">Un equipo de elite dedicado a brindarte la mejor experiencia</p>
                    </div>
                    <div className="team-grid">
                        {barbers.map((barber, i) => (
                            <div key={i} className="team-card">
                                <div className="team-avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <h4 className="team-name">{barber.name}</h4>
                                <span className="team-role">{barber.role}</span>
                                <span className="team-specialty">{barber.specialty}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="servicios">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Nuestros Servicios</span>
                        <h2 className="section-title">Lo Mejor para <span className="gold">Tu Estilo</span></h2>
                        <p className="section-subtitle">Desde cortes clásicos hasta tratamientos faciales y capilares especializados</p>
                    </div>
                    <div className="services-grid">
                        {services.map(service => (
                            <div key={service.id} className={`service-card ${service.featured ? 'featured' : ''}`}>
                                {service.featured && <div className="featured-badge">Más Popular</div>}
                                <div className="service-icon">
                                    <ServiceIconComponent type={service.icon} />
                                </div>
                                <h3 className="service-title">{service.name}</h3>
                                <p className="service-desc">{service.desc}</p>
                                <div className="service-footer">
                                    <span className="service-duration">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                        {service.duration}
                                    </span>
                                    <span className="service-price">{service.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="services-cta">
                        <Link to="/reservar" className="primary-btn large">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            Reservar Mi Turno Ahora
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Nuestro Trabajo</span>
                        <h2 className="section-title">Galería de <span className="gold">Estilos</span></h2>
                    </div>
                    <div className="gallery-grid four-items">
                        <div className="gallery-item large"><img src="/assets/monaco-sillones.webp" alt="Interior Barbería" /><div className="gallery-overlay"><span>Interior Barbería</span></div></div>
                        <div className="gallery-item"><img src="/assets/corte2-monaco.webp" alt="Corte Profesional" /><div className="gallery-overlay"><span>Corte Profesional</span></div></div>
                        <div className="gallery-item"><img src="/assets/cortes-monaco.jpg" alt="Estilos" /><div className="gallery-overlay"><span>Estilos</span></div></div>
                        <div className="gallery-item"><img src="/assets/exterior2-monaco.jpg" alt="Exterior Barbería" /><div className="gallery-overlay"><span>Exterior Barbería</span></div></div>
                    </div>
                </div>
            </section>

            {/* Sucursales Section */}
            <section className="location" id="sucursales">
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '3rem' }}>
                        <span className="section-badge">Sucursales</span>
                        <h2 className="section-title">Encontranos <span className="gold">Acá</span></h2>
                        <p className="section-subtitle">Dos ubicaciones en Córdoba para que elijas la que te quede más cómoda</p>
                    </div>

                    {SUCURSALES.map((sucursal, index) => (
                        <div key={sucursal.id} className={`location-content ${index > 0 ? 'location-second' : ''}`}>
                            <div className="location-info">
                                <div className="sucursal-header">
                                    <h3 className="sucursal-name">{sucursal.name} <span className="gold">– {sucursal.subtitle}</span></h3>
                                    <div className="sucursal-rating">
                                        <div className="stars">
                                            {[...Array(sucursal.ratingStars)].map((_, i) => <StarIcon key={i} />)}
                                        </div>
                                        <span className="rating-value">{sucursal.rating} en Google Maps</span>
                                    </div>
                                </div>
                                <div className="info-cards">
                                    <div className="info-card">
                                        <div className="info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                                        <div className="info-content"><h4>Dirección</h4><p>{sucursal.address}</p></div>
                                    </div>
                                    <div className="info-card">
                                        <div className="info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                                        <div className="info-content"><h4>Horarios</h4><p>{sucursal.hours}</p><p style={{ opacity: 0.7, fontSize: '0.85rem' }}>{sucursal.closedDay}</p></div>
                                    </div>
                                    <div className="info-card">
                                        <div className="info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                                        <div className="info-content"><h4>Teléfono</h4><a href={`tel:${sucursal.phone}`} className="instagram-link">{sucursal.phone}</a></div>
                                    </div>
                                </div>
                                <div className="sucursal-actions">
                                    <a href={sucursal.mapsUrl} target="_blank" rel="noopener noreferrer" className="directions-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                                        Cómo llegar
                                    </a>
                                    <a href={`https://wa.me/${sucursal.phoneWa}`} target="_blank" rel="noopener noreferrer" className="whatsapp-sucursal-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                            <div className="map-container">
                                <iframe src={sucursal.embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container">
                    <div className="cta-content">
                        <h2>¿Listo para tu nuevo <span className="gold">look</span>?</h2>
                        <p>Reservá tu turno ahora y viví la experiencia Mónaco Barber Studio</p>
                        <Link to="/reservar" className="primary-btn large">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            Reservar Turno
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="contacto">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <span className="section-badge">Contacto</span>
                            <h2 className="section-title">¿Tenés alguna <span className="gold">Pregunta?</span></h2>
                            <p className="contact-description">Escribinos por cualquier consulta o para coordinar tu turno directamente.</p>
                            <div className="contact-sucursales-info">
                                {SUCURSALES.map((s, i) => (
                                    <div key={i} className="contact-sucursal-item">
                                        <strong>{s.name}</strong>
                                        <span>{s.address}</span>
                                        <a href={`tel:${s.phone}`}>{s.phone}</a>
                                    </div>
                                ))}
                            </div>
                            <div className="social-links">
                                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                </a>
                                <a href={`https://wa.me/${SUCURSALES[0].phoneWa}`} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </a>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado!'); }}>
                                <div className="form-group"><label htmlFor="contact-name">Nombre</label><input type="text" id="contact-name" name="name" placeholder="Tu nombre" required /></div>
                                <div className="form-group"><label htmlFor="contact-email">Email</label><input type="email" id="contact-email" name="email" placeholder="tu@email.com" required /></div>
                                <div className="form-group"><label htmlFor="contact-message">Mensaje</label><textarea id="contact-message" name="message" placeholder="Tu mensaje..." required></textarea></div>
                                <button type="submit" className="submit-contact-btn">Enviar Mensaje <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingButton />
        </>
    )
}

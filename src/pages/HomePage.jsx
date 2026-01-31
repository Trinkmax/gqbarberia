import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingButton from '../components/FloatingButton'

const PHONE = '5493517468957'
const INSTAGRAM = 'https://www.instagram.com/gq_barberia/'

const services = [
    { id: 'corte-clasico', name: 'Corte Clásico', desc: 'Corte tradicional con tijera y máquina, incluye lavado y peinado.', duration: '30 min', price: '$14.000' },
    { id: 'corte-barba', name: 'Corte + Barba', desc: 'Combo completo: corte de cabello, perfilado y diseño de barba.', duration: '50 min', price: '$16.000', featured: true },
    { id: 'diseno-barba', name: 'Diseño de Barba', desc: 'Perfilado, diseño y tratamiento para una barba impecable.', duration: '25 min', price: '$8.000' },
    { id: 'afeitado-clasico', name: 'Afeitado Clásico', desc: 'Afeitado tradicional con navaja, toalla caliente y productos premium.', duration: '35 min', price: '$10.000' },
]

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
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
                        Nueva Córdoba, Argentina
                    </div>
                    <h1 className="hero-title">
                        <span className="line">Tu Barbero</span>
                        <span className="line">de <span className="gold">Confianza</span></span>
                    </h1>
                    <p className="hero-subtitle">
                        Soy Gastón Quiroga. Ofrezco una experiencia de barbería tradicional con un toque moderno.
                        Cortes precisos, atención personalizada y un ambiente donde te vas a sentir cómodo.
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
                            <span>Nueva Córdoba</span>
                        </div>
                        <div className="feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <span>Atención Personalizada</span>
                        </div>
                        <div className="feature">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            <span>Turnos Online</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-wrapper">
                        <img src="/assets/hero-barber.png" alt="Barbería GQ Interior" className="hero-image" />
                        <div className="floating-card card-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                            <span>Ambiente Cómodo</span>
                        </div>
                        <div className="floating-card card-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                            <span>Calidad Garantizada</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="sobre-mi">
                <div className="container">
                    <div className="about-content">
                        <div className="about-image">
                            <img src="/assets/gastonquiroga.jpg" alt="Gastón Quiroga - Barbero Profesional" />
                            <div className="about-badge">
                                <span className="badge-name">Gastón Quiroga</span>
                                <span className="badge-role">Barbero Profesional</span>
                            </div>
                        </div>
                        <div className="about-info">
                            <span className="section-badge">Sobre Mí</span>
                            <h2 className="section-title">Hola, soy <span className="gold">Gastón</span></h2>
                            <p className="about-text">Soy barbero profesional con pasión por el oficio. En GQ Barbería te ofrezco más que un simple corte: una experiencia completa donde cada detalle importa.</p>
                            <p className="about-text">Mi objetivo es que salgas sintiéndote renovado y con el estilo que mejor te representa. Trabajo con productos de calidad y técnicas actualizadas.</p>
                            <div className="about-highlights">
                                <div className="highlight">
                                    <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
                                    <div className="highlight-text"><span className="highlight-title">Atención Individual</span><span className="highlight-desc">Cada cliente es único</span></div>
                                </div>
                                <div className="highlight">
                                    <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                                    <div className="highlight-text"><span className="highlight-title">Puntualidad</span><span className="highlight-desc">Tu tiempo vale</span></div>
                                </div>
                                <div className="highlight">
                                    <div className="highlight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg></div>
                                    <div className="highlight-text"><span className="highlight-title">Productos Premium</span><span className="highlight-desc">Solo lo mejor</span></div>
                                </div>
                            </div>
                            <Link to="/reservar" className="primary-btn">Reservar con Gastón <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="servicios">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Mis Servicios</span>
                        <h2 className="section-title">Lo Mejor para <span className="gold">Tu Estilo</span></h2>
                        <p className="section-subtitle">Cada servicio está pensado para brindarte una experiencia única</p>
                    </div>
                    <div className="services-grid">
                        {services.map(service => (
                            <div key={service.id} className={`service-card ${service.featured ? 'featured' : ''}`}>
                                {service.featured && <div className="featured-badge">Más Popular</div>}
                                <div className="service-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="3" /><path d="M6 9v12" /><path d="M20 3v18" /></svg>
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
                        <span className="section-badge">Mi Trabajo</span>
                        <h2 className="section-title">Galería de <span className="gold">Estilos</span></h2>
                    </div>
                    <div className="gallery-grid four-items">
                        <div className="gallery-item large"><img src="/assets/mohicano.jpg" alt="Mohicano Fade" /><div className="gallery-overlay"><span>Mohicano Fade</span></div></div>
                        <div className="gallery-item"><img src="/assets/midmullet.jpg" alt="Mid Mullet" /><div className="gallery-overlay"><span>Mid Mullet</span></div></div>
                        <div className="gallery-item"><img src="/assets/lowtupperfade.jpg" alt="Low Taper Fade" /><div className="gallery-overlay"><span>Low Taper Fade</span></div></div>
                        <div className="gallery-item"><img src="/assets/highfade.jpg" alt="High Fade" /><div className="gallery-overlay"><span>High Fade</span></div></div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="location" id="ubicacion">
                <div className="container">
                    <div className="location-content">
                        <div className="location-info">
                            <span className="section-badge">Ubicación</span>
                            <h2 className="section-title">Encontrame <span className="gold">Acá</span></h2>
                            <p className="location-description">Estoy ubicado en el corazón de Nueva Córdoba, en un lugar de fácil acceso.</p>
                            <div className="info-cards">
                                <div className="info-card">
                                    <div className="info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
                                    <div className="info-content"><h4>Dirección</h4><p>San Lorenzo 445</p><p>Nueva Córdoba, Córdoba</p></div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
                                    <div className="info-content"><h4>Horarios</h4><p>Lun - Sáb: 10:00 - 20:00</p></div>
                                </div>
                                <div className="info-card">
                                    <div className="info-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></div>
                                    <div className="info-content"><h4>Instagram</h4><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="instagram-link">@gq_barberia</a></div>
                                </div>
                            </div>
                            <a href="https://maps.google.com/?q=San+Lorenzo+445,+Nueva+Córdoba,+Córdoba,+Argentina" target="_blank" rel="noopener noreferrer" className="directions-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                                Cómo llegar
                            </a>
                        </div>
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.1895798270867!2d-64.18171733037022!3d-31.424927153994005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a30010474c19%3A0x722b49e9b7846d84!2sGQbarberia!5e1!3m2!1ses-419!2sar!4v1769895983520!5m2!1ses-419!2sar" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container">
                    <div className="cta-content">
                        <h2>¿Listo para tu nuevo <span className="gold">look</span>?</h2>
                        <p>Reservá tu turno ahora y viví la experiencia GQ Barbería</p>
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
                            <p className="contact-description">Escribime por cualquier consulta o para coordinar tu turno directamente.</p>
                            <div className="social-links">
                                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                </a>
                                <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
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

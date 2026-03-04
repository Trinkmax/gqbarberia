import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SUCURSALES = [
    {
        id: 'monaco-3',
        name: 'Mónaco 3 – Rondeau 30',
        phoneWa: '5493517482277',
    },
    {
        id: 'monaco-parana',
        name: 'Mónaco – Paraná 419',
        phoneWa: '5493517691830',
    }
]

// Servicios ampliados
const services = [
    {
        id: 'corte-clasico',
        name: 'Corte Clásico',
        description: 'Corte tradicional con tijera y máquina, incluye lavado y peinado.',
        duration: 30,
        price: 14000,
        icon: 'scissors'
    },
    {
        id: 'corte-barba',
        name: 'Corte + Barba',
        description: 'Combo completo: corte de cabello, perfilado y diseño de barba.',
        duration: 50,
        price: 16000,
        icon: 'combo',
        featured: true
    },
    {
        id: 'diseno-barba',
        name: 'Diseño de Barba',
        description: 'Perfilado, diseño y tratamiento para una barba impecable.',
        duration: 25,
        price: 8000,
        icon: 'beard'
    },
    {
        id: 'tratamiento-facial',
        name: 'Tratamiento Facial',
        description: 'Limpieza facial profunda con productos premium.',
        duration: 40,
        price: 12000,
        icon: 'facial'
    },
    {
        id: 'masaje-capilar',
        name: 'Masaje Capilar',
        description: 'Masaje terapéutico capilar que estimula el crecimiento y relaja.',
        duration: 20,
        price: 7000,
        icon: 'massage'
    },
    {
        id: 'tratamiento-capilar',
        name: 'Tratamiento Capilar',
        description: 'Tratamiento especializado para revitalizar y fortalecer tu cabello.',
        duration: 35,
        price: 10000,
        icon: 'treatment'
    },
]

// Horarios actualizados: 10:00 a 21:00
const morningSlots = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30']
const afternoonSlots = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30']
const allSlots = [...morningSlots, ...afternoonSlots]

const MONTHS_ES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const DAYS_ES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

// Iconos SVG para servicios
const ServiceIcon = ({ type }) => {
    const icons = {
        scissors: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3" />
                <path d="M8.12 8.12 12 12" />
                <path d="M20 4 8.12 15.88" />
                <circle cx="6" cy="18" r="3" />
                <path d="M14.8 14.8 20 20" />
            </svg>
        ),
        combo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
        ),
        beard: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M5 11c0 4 3 7.5 7 10 4-2.5 7-6 7-10" />
                <path d="M12 14v7" />
            </svg>
        ),
        facial: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
        ),
        massage: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
        ),
        treatment: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M12 2v4" />
                <path d="M3 10h18" />
                <path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                <path d="M9 14l2 2 4-4" />
            </svg>
        ),
        razor: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3v18" />
                <path d="M18 3v18" />
                <path d="M6 8h12" />
                <path d="M6 16h12" />
                <rect x="6" y="8" width="12" height="8" rx="1" />
            </svg>
        )
    }
    return icons[type] || icons.scissors
}

export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedSucursal, setSelectedSucursal] = useState(null)
    const [selectedService, setSelectedService] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', notes: '' })
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [showModal, setShowModal] = useState(false)

    const today = useMemo(() => {
        const d = new Date()
        d.setHours(0, 0, 0, 0)
        return d
    }, [])

    const calendarDays = useMemo(() => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const startPadding = firstDay.getDay()
        const days = []

        // Previous month padding
        const prevMonth = new Date(year, month, 0)
        for (let i = startPadding - 1; i >= 0; i--) {
            days.push({ day: prevMonth.getDate() - i, date: null, isOtherMonth: true })
        }

        // Current month
        for (let d = 1; d <= lastDay.getDate(); d++) {
            const date = new Date(year, month, d)
            const isSunday = date.getDay() === 0
            const isPast = date < today
            days.push({
                day: d,
                date,
                isToday: date.toDateString() === today.toDateString(),
                isDisabled: isSunday || isPast,
                isOtherMonth: false
            })
        }

        // Next month padding
        const remaining = 42 - days.length
        for (let i = 1; i <= remaining; i++) {
            days.push({ day: i, date: null, isOtherMonth: true })
        }

        return days
    }, [currentMonth, today])

    const availableSlots = useMemo(() => {
        if (!selectedDate) return { morning: [], afternoon: [] }
        const maxHour = 21

        // Simular disponibilidad random basada en la fecha
        const seed = selectedDate.getDate() + selectedDate.getMonth()

        const filterSlots = (slots) => slots.filter(slot => {
            const hour = parseInt(slot.split(':')[0])
            if (hour >= maxHour) return false
            return ((hour * 7 + seed) % 3) !== 0
        })

        return {
            morning: filterSlots(morningSlots),
            afternoon: filterSlots(afternoonSlots)
        }
    }, [selectedDate])

    const totalSteps = 5 // sucursal, servicio, fecha, datos, confirmar
    const stepLabels = ['Sucursal', 'Servicio', 'Fecha', 'Datos', 'Confirmar']

    const handleNext = () => {
        if (currentStep === 1 && !selectedSucursal) return alert('Seleccioná una sucursal')
        if (currentStep === 2 && !selectedService) return alert('Seleccioná un servicio')
        if (currentStep === 3 && (!selectedDate || !selectedTime)) return alert('Seleccioná fecha y horario')
        if (currentStep === 4 && (!formData.name || !formData.phone)) return alert('Completá tus datos')
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
    }

    const handlePrev = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const service = services.find(s => s.id === selectedService)
        const sucursal = SUCURSALES.find(s => s.id === selectedSucursal)
        const dateStr = selectedDate.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })
        const priceStr = formatPrice(service.price)

        const message = encodeURIComponent(
            `Hola! 👋 Quiero reservar un turno en ${sucursal.name}

✂️ *Servicio:* ${service.name}
💰 *Precio:* ${priceStr}
📅 *Fecha:* ${dateStr}
🕐 *Horario:* ${selectedTime} hs

👤 *Nombre:* ${formData.name}
📞 *Teléfono:* ${formData.phone}${formData.notes ? `
📝 *Notas:* ${formData.notes}` : ''}

Espero confirmación. Gracias! 🙌`
        )
        window.open(`https://wa.me/${sucursal.phoneWa}?text=${message}`, '_blank')
        setShowModal(true)
    }

    const formatPrice = (price) => `$${price.toLocaleString('es-AR')}`
    const formatDate = (date) => date ? date.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' }) : '-'

    return (
        <div className="booking-page">
            <Navbar isBookingPage />

            <section className="booking-hero">
                <div className="container">
                    <div className="booking-hero-content">
                        <span className="section-badge">Reserva Online</span>
                        <h1 className="section-title">Reservá Tu <span className="gold">Turno</span></h1>
                        <p className="section-subtitle">Elegí la sucursal, servicio, fecha y horario que mejor te convenga</p>

                        {/* Horarios del local */}
                        <div className="schedule-info">
                            <div className="schedule-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Lun - Sáb: 10:00 a 21:00 hs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="booking-section">
                <div className="container">
                    <div className="booking-container">
                        {/* Steps */}
                        <div className="booking-steps">
                            {[1, 2, 3, 4, 5].map(step => (
                                <div key={step}>
                                    <div className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}>
                                        <div className="step-number">{currentStep > step ? '✓' : step}</div>
                                        <span className="step-text">{stepLabels[step - 1]}</span>
                                    </div>
                                    {step < totalSteps && <div className="step-line"></div>}
                                </div>
                            )).reduce((acc, curr, i) => i === 0 ? [curr] : [...acc, <div key={`line-${i}`} className="step-line"></div>, curr], [])}
                        </div>

                        <form className="booking-form" onSubmit={handleSubmit}>
                            {/* Step 1: Sucursal Selection */}
                            {currentStep === 1 && (
                                <div className="form-step active">
                                    <h3 className="form-step-title">Elegí la sucursal</h3>
                                    <div className="sucursal-selection-grid">
                                        {SUCURSALES.map(sucursal => (
                                            <label key={sucursal.id} className="sucursal-card-option">
                                                <input
                                                    type="radio"
                                                    name="sucursal"
                                                    value={sucursal.id}
                                                    checked={selectedSucursal === sucursal.id}
                                                    onChange={() => setSelectedSucursal(sucursal.id)}
                                                />
                                                <div className="sucursal-card-content">
                                                    <div className="sucursal-card-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                            <circle cx="12" cy="10" r="3" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="sucursal-card-name">{sucursal.name}</h4>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Service Selection */}
                            {currentStep === 2 && (
                                <div className="form-step active">
                                    <h3 className="form-step-title">Seleccioná un servicio</h3>
                                    <div className="service-selection-grid">
                                        {services.map(service => (
                                            <label key={service.id} className="service-card-option">
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    value={service.id}
                                                    checked={selectedService === service.id}
                                                    onChange={() => setSelectedService(service.id)}
                                                />
                                                <div className="service-card-content">
                                                    <h4 className="service-name">{service.name}</h4>
                                                    <p className="service-description">{service.description}</p>
                                                    <div className="service-meta">
                                                        <span className="service-duration">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <circle cx="12" cy="12" r="10" />
                                                                <polyline points="12 6 12 12 16 14" />
                                                            </svg>
                                                            {service.duration} min
                                                        </span>
                                                        <span className="service-price-tag">{formatPrice(service.price)}</span>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Date & Time */}
                            {currentStep === 3 && (
                                <div className="form-step active">
                                    <h3 className="form-step-title">Elegí fecha y horario</h3>
                                    <div className="datetime-container">
                                        <div className="calendar-container">
                                            <div className="calendar-header">
                                                <button type="button" className="calendar-nav prev" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                                                </button>
                                                <span className="calendar-title">{MONTHS_ES[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                                                <button type="button" className="calendar-nav next" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                                                </button>
                                            </div>
                                            <div className="calendar-weekdays">
                                                {DAYS_ES.map(day => <span key={day}>{day}</span>)}
                                            </div>
                                            <div className="calendar-days">
                                                {calendarDays.map((item, i) => (
                                                    <button
                                                        type="button"
                                                        key={i}
                                                        className={`calendar-day ${item.isOtherMonth ? 'other-month' : ''} ${item.isToday ? 'today' : ''} ${item.isDisabled ? 'disabled' : ''} ${selectedDate?.toDateString() === item.date?.toDateString() ? 'selected' : ''}`}
                                                        disabled={item.isDisabled || item.isOtherMonth}
                                                        onClick={() => { setSelectedDate(item.date); setSelectedTime(null); }}
                                                    >
                                                        {item.day}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="time-slots-container">
                                            <h4 className="time-title">Horarios disponibles</h4>
                                            <p className="time-subtitle">{selectedDate ? formatDate(selectedDate) : 'Seleccioná una fecha'}</p>

                                            {selectedDate ? (
                                                <div className="time-slots-sections">
                                                    {/* Mañana */}
                                                    <div className="time-section">
                                                        <div className="time-section-header">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <circle cx="12" cy="12" r="4" />
                                                                <path d="M12 2v2" />
                                                                <path d="M12 20v2" />
                                                                <path d="m4.93 4.93 1.41 1.41" />
                                                                <path d="m17.66 17.66 1.41 1.41" />
                                                                <path d="M2 12h2" />
                                                                <path d="M20 12h2" />
                                                                <path d="m6.34 17.66-1.41 1.41" />
                                                                <path d="m19.07 4.93-1.41 1.41" />
                                                            </svg>
                                                            <span>Mañana</span>
                                                        </div>
                                                        <div className="time-slots">
                                                            {availableSlots.morning.length > 0 ? (
                                                                availableSlots.morning.map(slot => (
                                                                    <button
                                                                        type="button"
                                                                        key={slot}
                                                                        className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
                                                                        onClick={() => setSelectedTime(slot)}
                                                                    >
                                                                        {slot}
                                                                    </button>
                                                                ))
                                                            ) : (
                                                                <p className="no-slots">Sin disponibilidad</p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Tarde */}
                                                    <div className="time-section">
                                                        <div className="time-section-header">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                                            </svg>
                                                            <span>Tarde</span>
                                                        </div>
                                                        <div className="time-slots">
                                                            {availableSlots.afternoon.length > 0 ? (
                                                                availableSlots.afternoon.map(slot => (
                                                                    <button
                                                                        type="button"
                                                                        key={slot}
                                                                        className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
                                                                        onClick={() => setSelectedTime(slot)}
                                                                    >
                                                                        {slot}
                                                                    </button>
                                                                ))
                                                            ) : (
                                                                <p className="no-slots">Sin disponibilidad</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="empty-slots-message">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                        <line x1="16" y1="2" x2="16" y2="6" />
                                                        <line x1="8" y1="2" x2="8" y2="6" />
                                                        <line x1="3" y1="10" x2="21" y2="10" />
                                                    </svg>
                                                    <p>Seleccioná una fecha para ver los horarios disponibles</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Personal Data */}
                            {currentStep === 4 && (
                                <div className="form-step active">
                                    <h3 className="form-step-title">Tus datos</h3>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label htmlFor="name">Nombre completo</label>
                                            <input type="text" id="name" placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Teléfono</label>
                                            <input type="tel" id="phone" placeholder="+54 9 351 XXX XXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                                        </div>
                                        <div className="form-group full-width">
                                            <label htmlFor="email">Email (opcional)</label>
                                            <input type="email" id="email" placeholder="tu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                        <div className="form-group full-width">
                                            <label htmlFor="notes">Notas adicionales (opcional)</label>
                                            <textarea id="notes" placeholder="Alguna preferencia o indicación especial..." value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })}></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Confirmation */}
                            {currentStep === 5 && (
                                <div className="form-step active">
                                    <h3 className="form-step-title">Confirmá tu turno</h3>
                                    <div className="booking-summary">
                                        <div className="summary-card">
                                            <div className="summary-header">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                                <h4>Resumen de Reserva</h4>
                                            </div>
                                            <div className="summary-content">
                                                <div className="summary-row"><span className="summary-label">Sucursal:</span><span className="summary-value">{SUCURSALES.find(s => s.id === selectedSucursal)?.name}</span></div>
                                                <div className="summary-row"><span className="summary-label">Servicio:</span><span className="summary-value">{services.find(s => s.id === selectedService)?.name}</span></div>
                                                <div className="summary-row"><span className="summary-label">Fecha:</span><span className="summary-value">{formatDate(selectedDate)}</span></div>
                                                <div className="summary-row"><span className="summary-label">Horario:</span><span className="summary-value">{selectedTime}</span></div>
                                                <div className="summary-row"><span className="summary-label">Nombre:</span><span className="summary-value">{formData.name}</span></div>
                                                <div className="summary-row"><span className="summary-label">Teléfono:</span><span className="summary-value">{formData.phone}</span></div>
                                                <div className="summary-divider"></div>
                                                <div className="summary-row total"><span className="summary-label">Total:</span><span className="summary-value">{formatPrice(services.find(s => s.id === selectedService)?.price || 0)}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation */}
                            <div className="form-navigation">
                                <button type="button" className="nav-btn prev-btn" onClick={handlePrev} disabled={currentStep === 1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                                    Anterior
                                </button>
                                {currentStep < totalSteps ? (
                                    <button type="button" className="nav-btn next-btn" onClick={handleNext}>
                                        Siguiente
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                                    </button>
                                ) : (
                                    <button type="submit" className="nav-btn submit-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                        Confirmar por WhatsApp
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            <div className={`modal ${showModal ? 'active' : ''}`}>
                <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
                <div className="modal-content">
                    <div className="modal-icon success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    </div>
                    <h3>¡Mensaje Enviado!</h3>
                    <p>Tu solicitud fue enviada por WhatsApp. Te esperamos en Mónaco Barber Studio.</p>
                    <Link to="/" className="modal-close-btn">Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}

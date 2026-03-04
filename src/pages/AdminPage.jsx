import { useState, useMemo } from 'react'
import '../styles/admin.css'

// ── Mock Data ─────────────────────────────────────────────────────────────────

const BARBEROS = [
    { id: 'alejandro', name: 'Alejandro', role: 'Barbero Senior', photo: '/assets/barbers/optimized/Alejandro.webp', sucursal: 'Mónaco 3' },
    { id: 'bianchi', name: 'Bianchi', role: 'Barbero Senior', photo: '/assets/barbers/optimized/Bianchi.webp', sucursal: 'Mónaco 3' },
    { id: 'fede', name: 'Fede', role: 'Barbero', photo: '/assets/barbers/optimized/Fede.webp', sucursal: 'Mónaco Paraná' },
    { id: 'nahuel', name: 'Nahuel', role: 'Barbero', photo: '/assets/barbers/optimized/Nahuel.webp', sucursal: 'Mónaco Paraná' },
    { id: 'nico', name: 'Nico', role: 'Barbero', photo: '/assets/barbers/optimized/Nico.webp', sucursal: 'Mónaco 3' },
    { id: 'pulcro', name: 'Pulcro', role: 'Barbero', photo: '/assets/barbers/optimized/Pulcro.webp', sucursal: 'Mónaco Paraná' },
]

const MOCK_TURNOS = {
    alejandro: [
        { id: 1, hora: '10:00', cliente: 'Martín López', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'completado', telefono: '+54 351 123-4567' },
        { id: 2, hora: '10:45', cliente: 'Juan García', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'completado', telefono: '+54 351 234-5678' },
        { id: 3, hora: '11:50', cliente: 'Pedro Fernández', servicio: 'Diseño de Barba', duracion: '25 min', precio: '$8.000', estado: 'en-curso', telefono: '+54 351 345-6789' },
        { id: 4, hora: '12:30', cliente: 'Lucas Rodríguez', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'pendiente', telefono: '+54 351 456-7890' },
        { id: 5, hora: '14:00', cliente: 'Tomás Martínez', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'pendiente', telefono: '+54 351 567-8901' },
        { id: 6, hora: '15:00', cliente: 'Andrés Gómez', servicio: 'Tratamiento Capilar', duracion: '35 min', precio: '$10.000', estado: 'pendiente', telefono: '+54 351 678-9012' },
        { id: 7, hora: '16:00', cliente: 'Diego Sánchez', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'pendiente', telefono: '+54 351 789-0123' },
        { id: 8, hora: '17:00', cliente: 'Facundo Torres', servicio: 'Masaje Capilar', duracion: '20 min', precio: '$7.000', estado: 'pendiente', telefono: '+54 351 890-1234' },
    ],
    bianchi: [
        { id: 9, hora: '10:00', cliente: 'Carlos Ruiz', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'completado', telefono: '+54 351 111-2233' },
        { id: 10, hora: '11:00', cliente: 'Santiago Díaz', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'completado', telefono: '+54 351 222-3344' },
        { id: 11, hora: '11:45', cliente: 'Matías Peralta', servicio: 'Diseño de Barba', duracion: '25 min', precio: '$8.000', estado: 'en-curso', telefono: '+54 351 333-4455' },
        { id: 12, hora: '13:00', cliente: 'Nicolás Herrera', servicio: 'Tratamiento Facial', duracion: '40 min', precio: '$12.000', estado: 'pendiente', telefono: '+54 351 444-5566' },
        { id: 13, hora: '14:30', cliente: 'Maximiliano Cruz', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'pendiente', telefono: '+54 351 555-6677' },
        { id: 14, hora: '15:30', cliente: 'Ramiro Acosta', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'pendiente', telefono: '+54 351 666-7788' },
    ],
    fede: [
        { id: 15, hora: '10:30', cliente: 'Joaquín Molina', servicio: 'Diseño de Barba', duracion: '25 min', precio: '$8.000', estado: 'completado', telefono: '+54 351 777-8899' },
        { id: 16, hora: '11:00', cliente: 'Emiliano Paz', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'en-curso', telefono: '+54 351 888-9900' },
        { id: 17, hora: '12:00', cliente: 'Valentín Rojas', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'pendiente', telefono: '+54 351 999-0011' },
        { id: 18, hora: '13:00', cliente: 'Thiago Medina', servicio: 'Masaje Capilar', duracion: '20 min', precio: '$7.000', estado: 'pendiente', telefono: '+54 351 000-1122' },
        { id: 19, hora: '14:00', cliente: 'Bruno Castro', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'pendiente', telefono: '+54 351 112-2334' },
    ],
    nahuel: [
        { id: 20, hora: '10:00', cliente: 'Agustín Ledesma', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'completado', telefono: '+54 351 223-3445' },
        { id: 21, hora: '10:45', cliente: 'Franco Ríos', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'completado', telefono: '+54 351 334-4556' },
        { id: 22, hora: '12:00', cliente: 'Lautaro Vega', servicio: 'Tratamiento Capilar', duracion: '35 min', precio: '$10.000', estado: 'en-curso', telefono: '+54 351 445-5667' },
        { id: 23, hora: '13:30', cliente: 'Gonzalo Pérez', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'pendiente', telefono: '+54 351 556-6778' },
        { id: 24, hora: '15:00', cliente: 'Ezequiel Morales', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'pendiente', telefono: '+54 351 667-7889' },
        { id: 25, hora: '16:30', cliente: 'Iván Suárez', servicio: 'Diseño de Barba', duracion: '25 min', precio: '$8.000', estado: 'pendiente', telefono: '+54 351 778-8990' },
        { id: 26, hora: '17:30', cliente: 'Sebastián Luna', servicio: 'Tratamiento Facial', duracion: '40 min', precio: '$12.000', estado: 'pendiente', telefono: '+54 351 889-9001' },
    ],
    nico: [
        { id: 27, hora: '11:00', cliente: 'Damián Campos', servicio: 'Tratamiento Capilar', duracion: '35 min', precio: '$10.000', estado: 'completado', telefono: '+54 351 901-2345' },
        { id: 28, hora: '12:00', cliente: 'Cristian Aguirre', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'en-curso', telefono: '+54 351 012-3456' },
        { id: 29, hora: '13:00', cliente: 'Leandro Silva', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'pendiente', telefono: '+54 351 123-4568' },
        { id: 30, hora: '14:30', cliente: 'Pablo Romero', servicio: 'Masaje Capilar', duracion: '20 min', precio: '$7.000', estado: 'pendiente', telefono: '+54 351 234-5679' },
    ],
    pulcro: [
        { id: 31, hora: '10:00', cliente: 'Roberto Méndez', servicio: 'Tratamiento Facial', duracion: '40 min', precio: '$12.000', estado: 'completado', telefono: '+54 351 345-6790' },
        { id: 32, hora: '11:00', cliente: 'Hernán Ponce', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'completado', telefono: '+54 351 456-7891' },
        { id: 33, hora: '12:00', cliente: 'Mauricio Ortiz', servicio: 'Diseño de Barba', duracion: '25 min', precio: '$8.000', estado: 'en-curso', telefono: '+54 351 567-8902' },
        { id: 34, hora: '13:00', cliente: 'Ariel Navarro', servicio: 'Corte Clásico', duracion: '30 min', precio: '$14.000', estado: 'pendiente', telefono: '+54 351 678-9013' },
        { id: 35, hora: '14:00', cliente: 'Gabriel Bravo', servicio: 'Tratamiento Facial', duracion: '40 min', precio: '$12.000', estado: 'pendiente', telefono: '+54 351 789-0124' },
        { id: 36, hora: '15:30', cliente: 'Esteban Flores', servicio: 'Corte + Barba', duracion: '50 min', precio: '$16.000', estado: 'pendiente', telefono: '+54 351 890-1235' },
    ],
}

const ESTADO_CONFIG = {
    completado: { label: 'Completado', icon: '✓', className: 'status-completado' },
    'en-curso': { label: 'En Curso', icon: '●', className: 'status-en-curso' },
    pendiente: { label: 'Pendiente', icon: '○', className: 'status-pendiente' },
    cancelado: { label: 'Cancelado', icon: '✕', className: 'status-cancelado' },
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
)

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
)

const ScissorsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>
)

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
)

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
)

const DollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
)

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
)

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
)

// ── Helper Functions ──────────────────────────────────────────────────────────

function getToday() {
    const now = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formatted = now.toLocaleDateString('es-AR', options)
    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

function getCurrentTime() {
    return new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
}

// ── Components ────────────────────────────────────────────────────────────────

function BarberSelector({ barberos, selectedId, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const selected = barberos.find(b => b.id === selectedId)

    return (
        <div className="admin-barber-selector">
            <button
                className={`admin-selector-trigger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="admin-selector-avatar">
                    <img src={selected.photo} alt={selected.name} />
                </div>
                <div className="admin-selector-info">
                    <span className="admin-selector-name">{selected.name}</span>
                    <span className="admin-selector-role">{selected.sucursal}</span>
                </div>
                <ChevronDownIcon />
            </button>

            {isOpen && (
                <div className="admin-selector-dropdown">
                    {barberos.map(barbero => (
                        <button
                            key={barbero.id}
                            className={`admin-selector-option ${barbero.id === selectedId ? 'active' : ''}`}
                            onClick={() => { onSelect(barbero.id); setIsOpen(false) }}
                        >
                            <div className="admin-selector-avatar small">
                                <img src={barbero.photo} alt={barbero.name} />
                            </div>
                            <div className="admin-selector-option-info">
                                <span className="admin-selector-option-name">{barbero.name}</span>
                                <span className="admin-selector-option-role">{barbero.role} · {barbero.sucursal}</span>
                            </div>
                            {barbero.id === selectedId && <span className="admin-check">✓</span>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

function StatsBar({ turnos }) {
    const completados = turnos.filter(t => t.estado === 'completado').length
    const enCurso = turnos.filter(t => t.estado === 'en-curso').length
    const pendientes = turnos.filter(t => t.estado === 'pendiente').length
    const totalIngresos = turnos
        .filter(t => t.estado === 'completado')
        .reduce((sum, t) => sum + parseInt(t.precio.replace(/[$.]/g, '').replace(',', '')), 0)

    return (
        <div className="admin-stats">
            <div className="admin-stat-card">
                <div className="admin-stat-icon completado">
                    <CalendarIcon />
                </div>
                <div className="admin-stat-content">
                    <span className="admin-stat-value">{turnos.length}</span>
                    <span className="admin-stat-label">Total</span>
                </div>
            </div>
            <div className="admin-stat-card">
                <div className="admin-stat-icon en-curso">
                    <ScissorsIcon />
                </div>
                <div className="admin-stat-content">
                    <span className="admin-stat-value">{enCurso}</span>
                    <span className="admin-stat-label">En curso</span>
                </div>
            </div>
            <div className="admin-stat-card">
                <div className="admin-stat-icon pendiente">
                    <ClockIcon />
                </div>
                <div className="admin-stat-content">
                    <span className="admin-stat-value">{pendientes}</span>
                    <span className="admin-stat-label">Pendientes</span>
                </div>
            </div>
            <div className="admin-stat-card">
                <div className="admin-stat-icon ingreso">
                    <DollarIcon />
                </div>
                <div className="admin-stat-content">
                    <span className="admin-stat-value">${totalIngresos.toLocaleString('es-AR')}</span>
                    <span className="admin-stat-label">Facturado</span>
                </div>
            </div>
        </div>
    )
}

function TurnoCard({ turno }) {
    const config = ESTADO_CONFIG[turno.estado]
    const phoneNumber = turno.telefono.replace(/[\s-+]/g, '')

    return (
        <div className={`admin-turno-card ${turno.estado}`}>
            <div className="admin-turno-time-column">
                <span className="admin-turno-hora">{turno.hora}</span>
                <span className="admin-turno-duracion">{turno.duracion}</span>
            </div>

            <div className="admin-turno-content">
                <div className="admin-turno-header">
                    <h4 className="admin-turno-cliente">
                        <UserIcon />
                        {turno.cliente}
                    </h4>
                    <span className={`admin-turno-estado ${config.className}`}>
                        <span className="admin-estado-dot">{config.icon}</span>
                        {config.label}
                    </span>
                </div>

                <div className="admin-turno-servicio">
                    <ScissorsIcon />
                    <span>{turno.servicio}</span>
                    <span className="admin-turno-precio">{turno.precio}</span>
                </div>

                <div className="admin-turno-actions">
                    <a
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="admin-turno-btn whatsapp"
                    >
                        <WhatsAppIcon />
                        WhatsApp
                    </a>
                    <a
                        href={`tel:${turno.telefono}`}
                        className="admin-turno-btn phone"
                    >
                        <PhoneIcon />
                        Llamar
                    </a>
                </div>
            </div>
        </div>
    )
}

function TimelineProgress({ turnos }) {
    const total = turnos.length
    const completados = turnos.filter(t => t.estado === 'completado').length
    const enCurso = turnos.filter(t => t.estado === 'en-curso').length
    const progress = total > 0 ? ((completados + enCurso * 0.5) / total) * 100 : 0

    return (
        <div className="admin-timeline-progress">
            <div className="admin-timeline-bar">
                <div className="admin-timeline-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="admin-timeline-labels">
                <span>{completados} completados</span>
                <span>{Math.round(progress)}% del día</span>
            </div>
        </div>
    )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function AdminPage() {
    const [selectedBarbero, setSelectedBarbero] = useState('alejandro')
    const [filtroEstado, setFiltroEstado] = useState('todos')

    const turnos = MOCK_TURNOS[selectedBarbero] || []

    const turnosFiltrados = useMemo(() => {
        if (filtroEstado === 'todos') return turnos
        return turnos.filter(t => t.estado === filtroEstado)
    }, [turnos, filtroEstado])

    const proximoTurno = turnos.find(t => t.estado === 'pendiente' || t.estado === 'en-curso')

    return (
        <div className="admin-page">
            {/* Header */}
            <header className="admin-header">
                <div className="admin-header-top">
                    <div className="admin-header-brand">
                        <img src="/assets/Monaco_Logo.jpg" alt="Mónaco" className="admin-logo" />
                        <div>
                            <h1 className="admin-title">Panel Barbero</h1>
                            <p className="admin-subtitle">{getToday()}</p>
                        </div>
                    </div>
                    <div className="admin-header-time">
                        <span className="admin-live-dot"></span>
                        {getCurrentTime()}
                    </div>
                </div>

                <BarberSelector
                    barberos={BARBEROS}
                    selectedId={selectedBarbero}
                    onSelect={setSelectedBarbero}
                />
            </header>

            {/* Stats */}
            <StatsBar turnos={turnos} />

            {/* Progress */}
            <TimelineProgress turnos={turnos} />

            {/* Próximo Turno Destacado */}
            {proximoTurno && (
                <div className="admin-next-turno">
                    <div className="admin-next-label">
                        <span className="admin-next-pulse"></span>
                        {proximoTurno.estado === 'en-curso' ? 'Turno Actual' : 'Próximo Turno'}
                    </div>
                    <div className="admin-next-info">
                        <div className="admin-next-time">{proximoTurno.hora}</div>
                        <div className="admin-next-details">
                            <span className="admin-next-cliente">{proximoTurno.cliente}</span>
                            <span className="admin-next-servicio">{proximoTurno.servicio} · {proximoTurno.duracion}</span>
                        </div>
                        <div className="admin-next-precio">{proximoTurno.precio}</div>
                    </div>
                </div>
            )}

            {/* Filtros */}
            <div className="admin-filtros">
                <button
                    className={`admin-filtro-btn ${filtroEstado === 'todos' ? 'active' : ''}`}
                    onClick={() => setFiltroEstado('todos')}
                >
                    Todos ({turnos.length})
                </button>
                <button
                    className={`admin-filtro-btn ${filtroEstado === 'pendiente' ? 'active' : ''}`}
                    onClick={() => setFiltroEstado('pendiente')}
                >
                    Pendientes
                </button>
                <button
                    className={`admin-filtro-btn ${filtroEstado === 'en-curso' ? 'active' : ''}`}
                    onClick={() => setFiltroEstado('en-curso')}
                >
                    En Curso
                </button>
                <button
                    className={`admin-filtro-btn ${filtroEstado === 'completado' ? 'active' : ''}`}
                    onClick={() => setFiltroEstado('completado')}
                >
                    Completados
                </button>
            </div>

            {/* Lista de Turnos */}
            <div className="admin-turnos-list">
                {turnosFiltrados.length === 0 ? (
                    <div className="admin-empty-state">
                        <CalendarIcon />
                        <p>No hay turnos para este filtro</p>
                    </div>
                ) : (
                    turnosFiltrados.map(turno => (
                        <TurnoCard key={turno.id} turno={turno} />
                    ))
                )}
            </div>

            {/* Footer */}
            <footer className="admin-footer">
                <p>Mónaco Barber Studio · Panel de Barbero</p>
            </footer>
        </div>
    )
}

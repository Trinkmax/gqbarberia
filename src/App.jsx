import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import AdminPage from './pages/AdminPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservar" element={<BookingPage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    )
}

export default App

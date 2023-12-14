import '../src/styles/global.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from '../src/pages/Login'
import Home from './pages/Home'
import { useAuth } from './services/ AuthContext'

function App() {
  const { isAuthenticated } = useAuth() // Certifique-se de inicializar o contexto de autenticação

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App

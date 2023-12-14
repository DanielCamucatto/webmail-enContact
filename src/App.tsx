import '../src/styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from '../src/pages/Login'
import Home from './pages/Home'
import ProtectedRoute from './services/ProtectRoute' // Corrigi o nome do arquivo

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <ProtectedRoute path="/home" protectedElement={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App

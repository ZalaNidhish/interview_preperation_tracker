import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import {ToastContainer} from 'react-toastify'
import { AuthProvider } from './app/context/AuthContext'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <AppRoutes />
    <ToastContainer />
  </AuthProvider>
)

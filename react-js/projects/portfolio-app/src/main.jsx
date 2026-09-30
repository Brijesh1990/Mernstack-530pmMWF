import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AdminLoginApp from './components/admin/AdminLoginApp.jsx'
import AdminLayout from './components/admin/AdminLayout.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/admin-login' element={<AdminLoginApp />} />
            <Route path='/admin-login/dashboard' element={<AdminLayout />} />
      </Routes>
    </Router>
  </StrictMode>,
)

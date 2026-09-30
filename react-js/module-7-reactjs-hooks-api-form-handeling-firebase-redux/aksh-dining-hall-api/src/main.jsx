import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
// user panel
import Layout from './Layout'
import FeedbackApp from './components/pages/FeedbackApp'
import ContactApp from './components/pages/ContactUs'
import './index.css'
// admin panel
import AdminLoginApp from './components/admin/AdminLoginApp'
import AdminLayout from './AdminLayout'
import AdminManageReviews from './components/admin/AdminManageReviews'
import AdminManageContact from './components/admin/AdminManageContact'
import AdminAddMenu from './components/admin/AdminAddMmenu'
import DeleteMenu from './components/admin/DeleteMenu'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/feedback-us' element={<FeedbackApp />} />
        <Route path='/contact-us' element={<ContactApp />} />
        <Route path='/admin-login' element={<AdminLoginApp />} />
        <Route path='/admin-login/dashboard' element={<AdminLayout />} />
        <Route path='/admin-login/manage-reviews' element={<AdminManageReviews />} />
        <Route path='/admin-login/manage-contact' element={<AdminManageContact />} />
         <Route path='/admin-login/add-menu' element={<AdminAddMenu />} />
         
         <Route path='/admin-login/delete-menu/:id' element={<DeleteMenu />} />
      </Routes>
    </Router>
  </StrictMode>,
)

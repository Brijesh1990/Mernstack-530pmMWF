import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import ManageProduct from './components/ManageProduct.jsx'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import DeleteProduct from './components/DeleteProduct.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/manage-products" element={<ManageProduct />} />
        <Route path="/delete-products/:id" element={<DeleteProduct />} />
        <Route path="/edit-products/:id" element={<UpdateProduct />} />

      </Routes>
    </Router>
  </StrictMode>,
)

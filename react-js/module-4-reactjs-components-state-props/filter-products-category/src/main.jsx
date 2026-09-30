import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductGrid from './ProductGrid'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
createRoot(document.getElementById('root')).render(
<StrictMode>
<ProductGrid />
</StrictMode>,
)

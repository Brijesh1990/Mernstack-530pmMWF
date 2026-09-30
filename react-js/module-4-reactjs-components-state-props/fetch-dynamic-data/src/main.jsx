import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EmployeeData from './EmployeeData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeData />
  </StrictMode>,
)

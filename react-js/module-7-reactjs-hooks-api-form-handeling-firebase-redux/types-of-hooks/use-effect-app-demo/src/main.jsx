import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import EmployeeData from './EmployeeData'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <EmployeeData />
  </StrictMode>,
)

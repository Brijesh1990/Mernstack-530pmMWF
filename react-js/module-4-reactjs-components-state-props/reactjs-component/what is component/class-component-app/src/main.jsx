import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import EmployeeApp from './EmployeeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name="Akash patel" /> */}
    <EmployeeApp />
  </StrictMode>,
)

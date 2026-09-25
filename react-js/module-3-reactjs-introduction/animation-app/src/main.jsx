import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Appoint from './BookAppointmentApp'
import './index.css'
import 'animate.css'
createRoot(document.getElementById('root')).render(
<StrictMode>
<Appoint />
</StrictMode>,
)

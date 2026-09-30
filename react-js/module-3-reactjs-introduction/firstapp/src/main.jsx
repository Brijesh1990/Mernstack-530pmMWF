import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './HelloApp'
import Calc from './CalcApp'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Hello />  
  <Calc />
  </StrictMode>,
)

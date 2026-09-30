import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Add,subs,Mult,DV} from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <button onClick={Add}>Add</button>
    <button onClick={subs}>Subs</button>
    <button onClick={Mult}>Multi</button>
    <button onClick={DV}>Divisions</button>
  </StrictMode>,
)

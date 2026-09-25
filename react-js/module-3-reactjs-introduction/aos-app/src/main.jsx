import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AnimApp from './AnimationApp'
import FlipApp from './PhotoFlipApp'
import './index.css'
import 'animate.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AnimApp /> */}
    <FlipApp />
  </StrictMode>,
)

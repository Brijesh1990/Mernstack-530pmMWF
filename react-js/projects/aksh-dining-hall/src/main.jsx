import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Layout from './Layout'
import FeedbackApp from './components/pages/FeedbackApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/feedback-us' element={<FeedbackApp />} />
      </Routes>
    </Router>
  </StrictMode>,
)

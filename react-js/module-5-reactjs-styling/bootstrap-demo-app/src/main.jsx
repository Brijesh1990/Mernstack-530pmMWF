import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css'
// container app
// import ContainerApp from './ContainerApp'
import Layout from './Layout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ContainerApp />   */}
  <Layout />
  </StrictMode>,
)

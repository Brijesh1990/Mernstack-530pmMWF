import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import NameApp from './NameApp'
// import CounterApp from './CounterApp'
import NameMultipleApp from './MultipleAppUpdateData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NameApp /> */}
    {/* <CounterApp /> */}
    <NameMultipleApp />
  </StrictMode>,
)

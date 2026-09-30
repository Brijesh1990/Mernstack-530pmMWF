import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import EmployeeApp from './EmployeeApp'
// import IconsApp from './IconsApp'
import OfficeApp from './OfficeApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <EmployeeApp id="st008" fullname="Brijesh Kumar Pandey" salary="89500" address="150 feet ring road behind savan signet raiya Road Rajkot-360005" /> */}

    {/* <IconsApp id="st008" fullname="Brijesh Kumar Pandey" salary="89500" address="150 feet ring road behind svan signet raiya Road Rajkot-360005" /> */}

   <OfficeApp name="tops technology pvt ltd" id="RJ111" dep="Information technology" address="aditya complex 1st floor behind jalaram sociity" />

  </StrictMode>,
)

import React from 'react'
import { Nav,NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (
    <div>
      <Nav className='bg-dark p-3 text-white top-0 fixed-top'>
       <ul className='navbar-links'>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about-us">About</Link></li>
       <li><Link to="/gallery">Gallery</Link></li>
       <li><Link to="/feedback">Feedback</Link></li>
       <li><Link to="/contact">Contact</Link></li>
       
       </ul>
      </Nav>
    </div>
  )
}

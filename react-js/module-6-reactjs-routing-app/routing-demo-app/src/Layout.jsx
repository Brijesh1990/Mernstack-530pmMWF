import React from 'react'
import NavbarApp from './NavbarApp'
import ContentApp from './ContentApp'
import FooterApp from './FooterApp'
export default function Layout() {
  return (
    <div>
      <NavbarApp />
      <ContentApp />
      <FooterApp />
    </div>
  )
}

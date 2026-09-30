import React from 'react'
import HeaderApp from './components/HeaderApp'
import BannerApp from './components/BannerApp'
import ContentApp from './components/ContentApp'
import FooterApp from './components/FooterApp'
import LoginApp from './components/pages/LoginApp'
import CartApp from './components/pages/CartApp'
export default function Layout() {
  return (
    <>
     <HeaderApp />
     <BannerApp />
     <ContentApp />
     <FooterApp />
     <LoginApp />
     <CartApp />
    
    </>
  )
}

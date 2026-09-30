import React from 'react'
import HeaderApp from './components/HeaderApp'
import BannerApp from './components/BannerApp'
import ContentApp from './components/ContentApp'
import CustomerReviews from './components/samples/CustomerReviews'
import FooterApp from './components/FooterApp'
export default function Layout() {
  return (
    <>
     <HeaderApp />
     <BannerApp />
     <ContentApp />
     <CustomerReviews />
     <FooterApp />
    </>
  )
}

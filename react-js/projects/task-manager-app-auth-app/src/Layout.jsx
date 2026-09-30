import React from 'react'
import HeaderApp from './HeaderApp'
import ContentApp from './ContentApp'
export default function Layout() {
  return (
    <div className='lg:w-1/2 md:w-1/2 sm:w-full p-15 mx-auto mt-2 rounded-tr-lg'>
    <HeaderApp />
    <ContentApp />  
    </div>
  )
}

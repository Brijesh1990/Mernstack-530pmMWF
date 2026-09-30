import React from 'react'
import banner from '../images/banner.webp'
export default function BannerApp() {
  return (
<>
  {/* hero section  */}
  <section className="py-5">
    <div className="max-w-full mx-auto px-4 sm:px-14 lg:px-18 text-center">
      <img
        src={banner}
        alt="Blinkit Banner"
        className="w-full mx-auto rounded-lg  sm:h-70 md:h-75 lg:h-80"
      />
    </div>
  </section>
</>
  )
}

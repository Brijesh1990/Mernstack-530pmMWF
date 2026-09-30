import React from 'react'

export default function FooterApp() {
  return (
   
   
    <footer className="w-full py-12 px-6 mt-auto bg-[#f7f3ee] dark:bg-stone-900 border-t border-outline-variant/10">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
    <div className="flex flex-col gap-2">
      <div className="text-xl font-['Newsreader'] text-[#8d1219]">
        Aksh Dining Hall
      </div>
      <p className="text-stone-500 font-['Plus_Jakarta_Sans'] text-sm italic">
        Crafting memories through heritage recipes.
      </p>
    </div>
    <nav className="flex gap-8">
      <a
        className="text-stone-500 hover:text-[#8d1219] font-['Plus_Jakarta_Sans'] text-sm transition-all duration-200 underline decoration-[#fead5c] underline-offset-4"
        href="#"
      >
        Privacy Policy
      </a>
      <a
        className="text-stone-500 hover:text-[#8d1219] font-['Plus_Jakarta_Sans'] text-sm transition-all duration-200 hover:underline decoration-[#fead5c] underline-offset-4"
        href="#"
      >
        Terms of Service
      </a>
      <a
        className="text-stone-500 hover:text-[#8d1219] font-['Plus_Jakarta_Sans'] text-sm transition-all duration-200 hover:underline decoration-[#fead5c] underline-offset-4"
        href="#"
      >
        Contact Us
      </a>
    </nav>
    <div className="text-stone-500 font-['Plus_Jakarta_Sans'] text-sm text-center md:text-right">
      © 2024 Aksh Dining Hall. The Modern Heirloom.
    </div>
  </div>
</footer>

  )
}

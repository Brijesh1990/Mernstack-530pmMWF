import React from 'react'

export default function AdminHeaderApp() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between sticky top-0 z-40">
  <div>
    <h2 className="heading-font text-4xl text-[#6c1118] font-semibold">
      Dashboard
    </h2>
    <p className="text-gray-500 text-sm">Welcome back, Admin</p>
  </div>
  <div className="flex items-center gap-4">
    <button className="bg-[#f4ede4] w-12 h-12 rounded-2xl text-xl hover:scale-105 transition">
      🔔
    </button>
    <div className="flex items-center gap-3 bg-[#f4ede4] px-3 py-2 rounded-2xl">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="w-11 h-11 rounded-xl object-cover"
      />
      <div>
        <h4 className="font-semibold text-sm">Anand Shah</h4>
        <p className="text-xs text-gray-500">Administrator</p>
      </div>
    </div>
  </div>
</header>

  )
}

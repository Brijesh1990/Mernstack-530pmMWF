import React from 'react'

export default function AdminLoginApp() {
  return (
   <>
  {/* ================= LOGIN PAGE ================= */}
  <section
    id="loginPage"
    className="min-h-screen flex items-center justify-center p-5"
  >
    <div className="max-w-6xl w-full grid lg:grid-cols-2 overflow-hidden rounded-[36px] shadow-2xl bg-white">
      {/* LEFT */}
      <div className="relative hidden lg:flex flex-col justify-between bg-[#5c0d12] text-white p-14 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#b66d3f] rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f0a44d] rounded-full blur-3xl opacity-20" />
        <div className="relative z-10 fade-up">
          <h1 className="heading-font text-6xl font-semibold leading-tight">
            Aksh Dining Hall
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-md">
            Admin experience crafted with heritage aesthetics and modern
            elegance.
          </p>
        </div>
        <div className="relative z-10 mt-10 slide-left">
          <img
            className="rounded-3xl shadow-2xl float"
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop"
            alt="food"
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="p-8 md:p-14 flex items-center bg-[#f8f4ef]">
        <div className="w-full max-w-md mx-auto fade-up">
          <div className="mb-10">
            <span className="bg-[#e8c089] text-[#7d3d16] px-4 py-1 rounded-full text-sm font-medium">
              ADMIN PORTAL
            </span>
            <h2 className="heading-font text-5xl text-[#6c1118] mt-5 font-semibold">
              Welcome Back
            </h2>
            <p className="text-gray-500 mt-3">
              Login to manage cuisines, orders, offers and guest experiences.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@akshdining.com"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-[#7c151b]"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-[#7c151b]"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="text-[#7c151b] font-semibold">
                Forgot Password?
              </a>
            </div>
            <button
              type="button"
              onclick="showDashboard()"
              className="w-full rounded-2xl bg-[#7c151b] hover:bg-[#5d0f14] text-white py-4 font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              Login to Dashboard
            </button>
          </form>
          <div className="mt-10 text-center text-gray-400 text-sm">
            © 2025 Aksh Dining Hall Admin
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

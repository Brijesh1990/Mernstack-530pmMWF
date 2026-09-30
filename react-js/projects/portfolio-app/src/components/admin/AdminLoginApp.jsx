import React from 'react'

export default function AdminLoginApp() {
  return (
    <div>
      <>
 
  <div className="max-w-6xl w-full mx-auto p-10">
    <div className="grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-2xl">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-10 text-white flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">ADMIN PANEL</h1>
        <p className="text-lg leading-relaxed opacity-90">
          Welcome back! Login to access your dashboard, manage users, projects,
          reports and system settings.
        </p>
        <div className="mt-10 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Admin"
            className="w-72 object-contain"
          />
        </div>
      </div>
      {/* Right Section */}
      <div className="p-8 md:p-12 flex items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Login Account
          </h2>
          <p className="text-slate-500 mb-8">
            Enter your credentials to continue
          </p>
          <form className="space-y-6">
            {/* Username */}
            <div>
              <label className="block mb-2 font-semibold">Username</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-slate-400">
                  <i className="fa-solid fa-user" />
                </span>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full border border-slate-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label className="block mb-2 font-semibold">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-slate-400">
                  <i className="fa-solid fa-lock" />
                </span>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full border border-slate-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Remember */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className="text-blue-600 font-medium">
                Forgot Password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] duration-300"
            >
              Login Now
            </button>
          </form>
          {/* Footer */}
          <div className="mt-8 text-center text-slate-500">
            © 2026 Admin Dashboard
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

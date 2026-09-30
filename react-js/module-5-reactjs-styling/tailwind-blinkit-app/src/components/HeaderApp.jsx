import React, { useState } from 'react'

export default function HeaderApp() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <h1 className="font-bold text-3xl">
              <span className="text-yellow-400">Blink</span>
              <span className="text-green-600">it</span>
            </h1>

            {/* Desktop Search */}
            <div className="hidden md:block flex-1 mx-6">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-2 w-full"
              />
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => setLoginOpen(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-full"
              >
                Login
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className="bg-yellow-400 text-white px-4 py-2 rounded-full"
              >
                Cart
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 border rounded"
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden space-y-3 pb-4">

              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-2 w-full"
              />

              <button
                onClick={() => {
                  setLoginOpen(true)
                  setMenuOpen(false)
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-full w-full"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setCartOpen(true)
                  setMenuOpen(false)
                }}
                className="bg-yellow-400 text-white px-4 py-2 rounded-full w-full"
              >
                Cart
              </button>

            </div>
          )}
        </div>
      </header>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Login</h2>

            <input
              type="text"
              placeholder="Username"
              className="border w-full mb-3 px-3 py-2"
            />

            <input
              type="password"
              placeholder="Password"
              className="border w-full mb-3 px-3 py-2"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setLoginOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Close
              </button>

              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>

        </div>
      )}

      {/* CART MODAL */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Cart</h2>

            <p className="mb-4">Your cart is empty 🛒</p>

            <button
              onClick={() => setCartOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Close
            </button>
          </div>

        </div>
      )}
    </>
  )
}
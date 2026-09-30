import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import CountProducts from './CountProducts'
export default function HeaderApp() {
   const [isOpen, setIsOpen] = useState(false);

  return (
   <>
  {/* Header */}
 <header className="bg-indigo-600 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">Task Manager</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition"
            >
              Add Product
            </Link>

            <Link
              to="/manage-products"
              className="text-white hover:text-yellow-300 transition"
            >
              Manage Product
            </Link>

            <Link
              to="/edit-product"
              className="text-white hover:text-yellow-300 transition"
            >
              Update Product
            </Link>

            <div className="bg-yellow-400 flex text-black px-4 py-1 rounded-full font-semibold">
              Total Products:
              <span className="ms-2">
                <CountProducts />
              </span>
            </div>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-indigo-700 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-indigo-500">
          <h2 className="text-white text-xl font-semibold">Menu</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col p-5 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            Add Product
          </Link>

          <Link
            to="/manage-products"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            Manage Product
          </Link>

          <Link
            to="/edit-product"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            Update Product
          </Link>

          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold w-fit inline-flex">
            Total Products: <CountProducts />
          </div>
        </nav>
      </div>
    </header>
</>

  )
}

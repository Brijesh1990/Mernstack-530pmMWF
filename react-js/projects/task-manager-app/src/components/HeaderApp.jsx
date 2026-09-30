import React from 'react'
import { Link } from 'react-router-dom'
import CountTask from './CountTask'
export default function HeaderApp() {
  return (
   <>
  {/* Header */}
  <header className="bg-indigo-600 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Task Manager</h1>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Add Task
          </Link>
          <Link
            to="/manage-task"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Manage Task
          </Link>
          <Link
            to="/edit-task"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Update Task
          </Link>
          {/* Task Count */}
          <div className="bg-yellow-400 flex text-black px-4 py-1 rounded-full font-semibold">
            Total Tasks: <span className='ms-2'><CountTask  /></span>
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <button
          id="menu-btn"
          className="md:hidden text-white focus:outline-none"
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
    {/* Mobile Menu */}
    <div
      id="mobile-menu"
      className="hidden md:hidden bg-indigo-700 px-4 py-4 space-y-3"
    >
      <a href="#" className="block text-white hover:text-yellow-300">
        Add Task
      </a>
      <a href="#" className="block text-white hover:text-yellow-300">
        Manage Task
      </a>
      <a href="#" className="block text-white hover:text-yellow-300">
        Update Task
      </a>
      <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block font-semibold">
        Total Tasks: 12
      </div>
    </div>
  </header>
</>

  )
}

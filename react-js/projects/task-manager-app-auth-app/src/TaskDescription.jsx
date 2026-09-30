import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileLines } from 'react-icons/fa6'
import {FaBackspace,FaUser} from 'react-icons/fa'
import HeaderApp from './HeaderApp'
export default function TaskDescription() {
return (
  <div className='lg:w-1/2 md:w-1/2 sm:w-full p-15 mx-auto mt-2 rounded-tr-lg'>
   <HeaderApp />
    {/* Main Card */}

    <div className="bg-white/90 backdrop-blur-md p-6 shadow-2xl transition-all duration-500 hover:shadow-blue-200 animate-[fadeIn_.7s_ease]">

      {/* Header */}

      <div className="flex items-center justify-between border-b pb-4">

        <h1 className="flex items-center gap-3 text-2xl font-bold text-slate-800">
          <FaFileLines className="text-green-700" />
          Timeline
        </h1>

        <Link
          to="/dashboard"
          className="rounded-full bg-blue-100 p-3 text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
        >
          <FaBackspace size={22} />
        </Link>

      </div>

      {/* Timeline */}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">

        <div className="rounded-2xl bg-green-50 p-5 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

          <h3 className="text-sm uppercase tracking-wide text-gray-500">
            Start Time
          </h3>

          <p className="mt-2 text-lg font-bold text-green-700">
            26 June 2026
          </p>

        </div>

        <div className="rounded-2xl bg-red-50 p-5 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

          <h3 className="text-sm uppercase tracking-wide text-gray-500">
            End Time
          </h3>

          <p className="mt-2 text-lg font-bold text-red-600">
            29 June 2026
          </p>

        </div>

      </div>

      {/* Description */}

      <div className="mt-8">

        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">

          <FaFileLines className="text-blue-500" />

          Description

        </h2>

        <div className="rounded-2xl bg-slate-50 p-5 leading-8 text-gray-600 shadow-sm">

          A great task description uses action-oriented verbs, clear
          instructions, and measurable goals. It defines exactly what needs
          to be done, how it should be executed, and the expected
          deliverables.

        </div>

      </div>

      {/* Members */}

      <div className="mt-8">

        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">

          <FaUser className="text-indigo-600" />

          Assign Members

        </h2>

        <div className="flex flex-wrap gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-110">
            A
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-110">
            B
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:scale-110">
            C
          </div>

          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-3xl font-bold text-white shadow-lg transition-all duration-300 hover:rotate-90 hover:scale-110">
            +
          </button>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <button
          className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-green-800 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-green-300"
        >
          ✓ Done
        </button>

        <button
          className="flex-1 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-orange-300"
        >
          ✏ Edit
        </button>

      </div>

    </div>

  </div>



)
}

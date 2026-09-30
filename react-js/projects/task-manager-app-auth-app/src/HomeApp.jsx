import React from 'react'
import taskimg from './images/task.png'
import { Link } from 'react-router-dom'
export default function HomeApp() {
  return (
   <div className="w-full max-w-md mx-auto bg-gray-100 rounded-2xl overflow-hidden shadow-lg mt-15">
  {/* Image */}
  <img
    src={taskimg}
    alt="Task Management"
    className="w-full h-52 sm:h-64 md:h-72 object-cover"
  />

  {/* Content */}
  <div className="bg-white p-6 sm:p-8">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight">
      Task <br />
      <span className="text-green-900 font-medium">
        Management
      </span>
    </h1>

    <p className="mt-4 text-gray-600 text-sm sm:text-base text-justify">
      Break down complex projects into milestones, task lists, tasks, and
      subtasks to manage them more efficiently. Assign tasks to your team and
      track their progress to ensure you finish on time.
    </p>

    <div className="mt-6 flex flex-col gap-3">
      <Link to="/login">
        <button
          type="button"
          className="w-full rounded-xl bg-green-900 py-3 text-white font-semibold hover:bg-green-800 transition"
        >
          Sign In
        </button>
      </Link>

      <Link to="/register">
        <button
          type="button"
          className="w-full rounded-xl bg-yellow-400 py-3 text-black font-semibold hover:bg-yellow-500 transition"
        >
          Create an Account
        </button>
      </Link>
    </div>
  </div>
</div>
  )
}

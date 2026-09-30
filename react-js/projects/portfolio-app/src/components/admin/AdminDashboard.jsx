import React from 'react'

export default function AdminDashboard() {
  return (
   <>
 
  <div className="flex min-h-screen">
    {/* Sidebar */}
    <aside
      id="sidebar"
      className="fixed lg:static left-0 top-0 z-50 h-full w-72 bg-slate-900 text-white transform -translate-x-full lg:translate-x-0 transition-all duration-300"
    >
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-3xl font-bold">Admin Panel</h2>
        <p className="text-slate-400 text-sm">Portfolio Management</p>
      </div>
      <nav className="p-5">
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-chart-line" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-user" />
              Admin Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-briefcase" />
              Add Experience
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-list" />
              Manage Experience
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-folder-plus" />
              Add Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-images" />
              Manage Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-envelope" />
              Manage Contacts
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600"
            >
              <i className="fa-solid fa-gear" />
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-xl bg-red-600 hover:bg-red-700"
            >
              <i className="fa-solid fa-right-from-bracket" />
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button id="menuBtn" className="lg:hidden text-2xl">
            <i className="fa-solid fa-bars" />
          </button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <i className="fa-solid fa-bell text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <img
            src="https://i.pravatar.cc/50"
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
        </div>
      </header>
      {/* Dashboard Content */}
      <main className="flex-1 p-6">
        {/* Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-slate-500">Total Portfolio</h4>
            <h2 className="text-4xl font-bold mt-2">24</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-slate-500">Experiences</h4>
            <h2 className="text-4xl font-bold mt-2">12</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-slate-500">Contacts</h4>
            <h2 className="text-4xl font-bold mt-2">158</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="text-slate-500">Visitors</h4>
            <h2 className="text-4xl font-bold mt-2">3.5K</h2>
          </div>
        </div>
        {/* Tables */}
        <div className="grid xl:grid-cols-2 gap-6">
          {/* Experience */}
          <div className="bg-white rounded-2xl shadow">
            <div className="p-5 border-b">
              <h3 className="font-bold text-xl">Recent Experience</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 text-left">Company</th>
                    <th className="p-4 text-left">Role</th>
                    <th className="p-4 text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">MeetMighty</td>
                    <td className="p-4">UI Designer</td>
                    <td className="p-4">2025</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">ABC Tech</td>
                    <td className="p-4">Frontend Dev</td>
                    <td className="p-4">2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Contacts */}
          <div className="bg-white rounded-2xl shadow">
            <div className="p-5 border-b">
              <h3 className="font-bold text-xl">Latest Contacts</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">John Doe</td>
                    <td className="p-4">john@gmail.com</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Alex</td>
                    <td className="p-4">alex@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white border-t px-6 py-4 text-center text-slate-600">
        © 2026 Portfolio Admin Dashboard | Designed with Tailwind CSS 4
      </footer>
    </div>
  </div>
</>

  )
}

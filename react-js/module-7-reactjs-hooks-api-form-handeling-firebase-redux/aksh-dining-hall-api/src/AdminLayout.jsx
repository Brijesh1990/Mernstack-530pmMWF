import React from 'react'
import SidebarApp from './components/admin/SidebarApp'
import AdminHeaderApp from './components/admin/AdminHeaderApp'
import AdminDashboardApp from './components/admin/AdminDashboardApp'
export default function AdminLayout() {
  return (
    <>
  {/* ================= DASHBOARD ================= */}
  <section id="dashboardPage">
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <SidebarApp />
      {/* MAIN */}
      <main className="flex-1">
        {/* HEADER */}
        <AdminHeaderApp />
        {/* CONTENT */}
        <AdminDashboardApp />
      </main>
    </div>
  </section>
</>

  )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function SidebarApp() {
return (
<aside className="w-72 bg-[#5c0d12] text-white p-6 hidden lg:flex flex-col sidebar-scroll overflow-y-auto vh-100 top-0 h-screen z-5 sticky">
<div>
<h1 className="heading-font text-4xl font-semibold">Aksh Admin</h1>
<p className="text-white/70 text-sm mt-2">Heritage Dining Dashboard</p>
</div>
<nav className="mt-12 space-y-3">
<Link to="/admin-login/dashboard"
className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#ffffff15] hover:bg-[#ffffff20] transition"
>
🏠 Dashboard
</Link>
<Link
to="/admin-login/add-menu"
className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#ffffff15] transition"
>
🍽 Menu Management
</Link>
<a
href="#"
className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#ffffff15] transition"
>
🧾 Orders
</a>
<Link to="/admin-login/manage-reviews"
className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#ffffff15] transition"
>
⭐ Manage Reviews
</Link>

<Link to="/admin-login/manage-contact"
className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#ffffff15] transition"
>
⭐ Manage Contact
</Link>
<a
href="#"
className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#ffffff15] transition"
>
🎁 Offers
</a>
<a
href="#"
className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#ffffff15] transition"
>
⚙ Settings
</a>
</nav>
<div className="mt-auto">
<div className="bg-[#ffffff12] rounded-3xl p-5">
<img
  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
  className="rounded-2xl mb-4"
/>
<h3 className="font-semibold text-lg">Weekend Special</h3>
<p className="text-sm text-white/70 mt-2">
  Track performance of festive dining offers.
</p>
</div>
</div>
</aside>

)
}

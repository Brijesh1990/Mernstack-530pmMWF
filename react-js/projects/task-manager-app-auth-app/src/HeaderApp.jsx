import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderApp() {
//logout app  
const logoutApp=()=>{
window.location.href="/login";
}

return (
<nav className="bg-gradient-to-r from-green-800 to-green-600 text-white  shadow-2xl animate-fade-in rounded-t-2xl">

{/* App Title */}
<div className="py-6">
<h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-wide">
Task Manager
</h1>
</div>

{/* Profile Section */}
<div className="flex items-center gap-2 px-6 pb-6">

<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-110 transition-all duration-300">
<img
src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
alt="Profile"
className="w-full h-full object-cover"
/>
</div>

<div>
<h2 className="text-lg sm:text-xl font-bold">
Brijesh Kumar Pandey
</h2>

<p className="text-green-100 text-sm sm:text-base">
Sr. Software Developer
</p>
</div>

</div>

{/* Navigation Tabs */}
<div className="px-2 pb-2">
<ul className="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap">

<li>
<Link
to=""
className="block rounded-full bg-white px-5 py-2 text-black font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
>
Recent
</Link>
</li>

<li>
<Link
to=""
className="block rounded-full bg-yellow-400 px-5 py-2 text-black font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
>
Today
</Link>
</li>

<li>
<Link
to="/add-employee"
className="block rounded-full bg-yellow-400 px-5 py-2 text-black font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
>
Add Employee
</Link>
</li>



<li>
{/* logout button */}
<button onClick={logoutApp}
className="block rounded-full bg-red-500 px-5 py-2 text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-600"
>
Logout 👈🏿
</button>
</li>
</ul>
</div>

</nav>
)
}

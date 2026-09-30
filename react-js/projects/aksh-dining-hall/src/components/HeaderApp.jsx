import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function HeaderApp() {
const [isOpen, setIsOpen] = useState(false);


return (
<>
{/* HEADER */}
<header className="w-full sticky top-0 z-50 bg-[#fdf9f4] dark:bg-stone-950 backdrop-blur-md bg-opacity-90 shadow-sm dark:shadow-none">
<div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">

{/* LOGO */}
<div className="text-2xl font-bold font-['Newsreader'] text-[#8d1219] dark:text-[#af2d2d] cursor-pointer active:scale-95 transition-transform">
Aksh Dining Hall
</div>

{/* DESKTOP NAV */}
<nav className="hidden md:flex items-center gap-8 font-['Newsreader'] uppercase tracking-wide">
<Link to="/" className="text-[#8d1219] border-b-2 border-[#fead5c] pb-1">Home</Link>
<Link to="/menu" className="text-stone-600 hover:text-[#8d1219]">Menu</Link>
<Link to="/about-us" className="text-stone-600 hover:text-[#8d1219]">About Us</Link>
<Link to="/feedback-us" className="text-stone-600 hover:text-[#8d1219]">Feedback</Link>
</nav>

{/* RIGHT SIDE */}
<div className="flex items-center gap-4">

{/* CART */}
<button className="p-2 text-[#8d1219] hover:bg-stone-100/50 rounded-full">
<span className="material-symbols-outlined">shopping_cart</span>
</button>

{/* LOGIN */}
<button className="hidden md:block px-6 py-2 bg-[#8d1219] text-white rounded-lg hover:opacity-90">
Login
</button>

{/* HAMBURGER (MOBILE ONLY) */}
<button
onClick={() => setIsOpen(true)}
className="md:hidden text-[#8d1219]"
>
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</div>
</header>

{/* OVERLAY */}
{isOpen && (
<div
className="fixed inset-0 bg-black/40 z-40"
onClick={() => setIsOpen(false)}
></div>
)}

{/* SIDEBAR */}
<div
className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-stone-900 z-50 transform transition-transform duration-300 ${
isOpen ? "translate-x-0" : "-translate-x-full"
}`}
>
{/* CLOSE BUTTON */}
<div className="flex justify-between items-center p-4 border-b">
<h2 className="text-xl font-bold text-[#8d1219]">
Aksh Dining Hall
</h2>
<button onClick={() => setIsOpen(false)}>
<span className="material-symbols-outlined">close</span>
</button>
</div>

{/* MOBILE NAV LINKS */}
<nav className="flex flex-col p-6 gap-6 text-lg">
<Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
<Link to="" onClick={() => setIsOpen(false)}>Menu</Link>
<Link to="" onClick={() => setIsOpen(false)}>About Us</Link>
<Link to="/feedback-us" onClick={() => setIsOpen(false)}>Feedback</Link>

<button className="mt-4 px-4 py-2 bg-[#8d1219] text-white rounded-lg">
Login
</button>
</nav>
</div>

</>
)
}

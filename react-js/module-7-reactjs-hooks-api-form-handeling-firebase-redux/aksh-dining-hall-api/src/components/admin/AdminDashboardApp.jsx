import React from 'react'
import CountApp from './CountApp'
import CountContactApp from './CountContactApp'
import { Link } from 'react-router-dom'
export default function AdminDashboardApp() {
  return (
    <div className="p-6 space-y-8">
  {/* STATS */}
  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
    <div className="bg-white rounded-3xl p-6 shadow-sm card-hover fade-up">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h3 className="text-4xl font-bold mt-3 text-[#5c0d12]">1,248</h3>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-[#f8e1cc] flex items-center justify-center text-3xl">
          🍛
        </div>
      </div>
      <p className="mt-5 text-green-600 text-sm font-medium">+18% this month</p>
    </div>
    <div className="bg-white rounded-3xl p-6 shadow-sm card-hover fade-up">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Revenue</p>
          <h3 className="text-4xl font-bold mt-3 text-[#5c0d12]">₹86K</h3>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-[#f8e1cc] flex items-center justify-center text-3xl">
          💰
        </div>
      </div>
      <p className="mt-5 text-green-600 text-sm font-medium">+11% growth</p>
    </div>
    <div className="bg-white rounded-3xl p-6 shadow-sm card-hover fade-up">
      <div className="flex items-center justify-between">
        
        <Link to="/admin-login/manage-reviews">
        <div>
          <p className="text-gray-500 text-sm">Guest Reviews</p>
          <h3 className="text-4xl font-bold mt-3 text-[#5c0d12]"><CountApp /></h3>
        </div>
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-[#f8e1cc] flex items-center justify-center text-3xl">
          ⭐
        </div>
      </div>
      <p className="mt-5 text-green-600 text-sm font-medium">
        Excellent rating
      </p>
    </div>
    <div className="bg-white rounded-3xl p-6 shadow-sm card-hover fade-up">
      <div className="flex items-center justify-between">

        <Link to="/admin-login/manage-contact"><div>
          <p className="text-gray-500 text-sm">Total Contacts</p>
          <h3 className="text-4xl font-bold mt-3 text-[#5c0d12]"><CountContactApp /></h3>
        </div>
        </Link>
        <div className="w-16 h-16 rounded-2xl bg-[#f8e1cc] flex items-center justify-center text-3xl">
          📅
        </div>
      </div>
      <p className="mt-5 text-green-600 text-sm font-medium">
        Fully booked weekend
      </p>
    </div>
  </div>
  {/* FEATURE CARDS */}
  <div className="grid xl:grid-cols-3 gap-6">
    {/* BIG CARD */}
    <div className="xl:col-span-2 bg-white rounded-[32px] overflow-hidden shadow-sm card-hover">
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
          className="h-full object-cover"
        />
        <div className="p-8 flex flex-col justify-center">
          <span className="bg-[#f1d3a8] text-[#7d3d16] px-4 py-1 rounded-full text-sm w-fit">
            BEST SELLER
          </span>
          <h3 className="heading-font text-5xl text-[#6c1118] mt-5">
            Grand Maharaja Thali
          </h3>
          <p className="text-gray-500 mt-5 leading-relaxed">
            Traditional flavors curated with premium presentation and luxury
            hospitality experience.
          </p>
          <button className="mt-8 bg-[#7c151b] text-white rounded-2xl px-6 py-4 w-fit hover:bg-[#5c0d12] transition">
            View Details
          </button>
        </div>
      </div>
    </div>
    {/* SIDE CARD */}
    <div className="bg-[#5c0d12] text-white rounded-[32px] p-8 relative overflow-hidden card-hover">
      <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-[#ffffff12]" />
      <h3 className="heading-font text-5xl leading-tight">
        Golden Hour Specials
      </h3>
      <p className="mt-5 text-white/75">
        Special combo offers crafted for families and celebrations.
      </p>
      <div className="mt-8 space-y-4">
        <div className="glass rounded-2xl p-4">
          <p className="font-semibold">Corporate Platters</p>
          <p className="text-sm text-white/80 mt-1">Lunch combos for teams</p>
        </div>
        <div className="glass rounded-2xl p-4">
          <p className="font-semibold">Anniversary Curations</p>
          <p className="text-sm text-white/80 mt-1">
            Premium tasting experiences
          </p>
        </div>
      </div>
    </div>
  </div>
  
</div>

  )
}

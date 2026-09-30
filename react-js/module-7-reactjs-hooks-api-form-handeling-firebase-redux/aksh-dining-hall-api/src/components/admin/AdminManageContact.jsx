import React,{useState,useEffect} from 'react'
import { FaTrash } from 'react-icons/fa'
import axios from 'axios'
import SidebarApp from './SidebarApp'
import AdminHeaderApp from './AdminHeaderApp'
import AdminDashboardApp from './AdminDashboardApp'
import CountContactApp from './CountContactApp'
export default function AdminManageContact() {
//destructuring of data
const[data,setData]=useState();
// data is a variables 
// setData is a function to update current state
// fetch data using axios 
useEffect(()=>{
axios.get(`http://localhost:8000/contact`).then((response)=>{
setData(response.data)
},[data])
})

return (
<>
<section id="dashboardPage">
<div className="flex min-h-screen">
{/* SIDEBAR */}
<SidebarApp />
{/* MAIN */}
<main className="flex-1">
{/* HEADER */}
<AdminHeaderApp />
{/* Manage Reviews  */}
<div className="bg-white rounded-[32px] p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="heading-font text-4xl text-[#6c1118]">Manage All Contact  <button className='bg-red-500 text-white p-3 rounded-full ms-40 text-xl'>Total Contacts Data <span className='bg-black p-1 rounded-full flex inline-flex'><CountContactApp /></span></button></h3>
<button className="bg-[#7c151b] text-white px-5 py-3 rounded-xl">
View All
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left text-gray-500 border-b">
<th className="pb-4">Name</th>
<th className="pb-4">Email</th>
<th className="pb-4">Phone</th>
<th className="pb-4">Subject</th>
<th className="pb-4">Comment</th>
<th className="pb-4">Action</th>
</tr>
</thead>
<tbody className="divide-y">

{data && data.map((items)=>{
return(
<>

<tr className="hover:bg-gray-50 transition">
<td className="py-5">{items.name}</td>
<td className="py-5">{items.email}</td>
<td className="py-5">{items.phone}</td>
<td className="py-5">{items.subject}</td>
<td className="py-5">{items.comment}</td>
<td><button className='bg-red-500 text-white p-3 rounded-2xl'><FaTrash /></button></td>
</tr>
</>
)
})}

</tbody>
</table>
</div>
</div>
</main>
</div>
</section>
</>
)
}

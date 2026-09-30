import React,{useRef,useState,useEffect} from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import SidebarApp from './SidebarApp'
import AdminHeaderApp from './AdminHeaderApp'
import CountContactApp from './CountContactApp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminAddMenu() {
// display food menu
const[foodmenu,setFoodMenu]=useState([]);
useEffect(()=>{
    // call api for fetch food menu data
    axios.get(`http://localhost:8000/addmenu`).then((response)=>{
        setFoodMenu(response.data);

    },[foodmenu])
})

//stored all data of form to add Menu
const photo=useRef("");
const name=useRef("");
const category=useRef("");
const oldprice=useRef("");
const offerprice=useRef("");
const qty=useRef("");
const description=useRef("");
const navigate=useNavigate();




// create a addEvent for add menu
const addMenuData=(e)=>{
    e.preventDefault();
    var inserMenuData={

        photo:photo.current.value,
        name:name.current.value,
        category:category.current.value,
        oldprice:oldprice.current.value,
        offerprice:offerprice.current.value,
        qty:qty.current.value,
        description:description.current.value
    }
    // call api 
    axios.post(`http://localhost:8000/addmenu`,inserMenuData).then(()=>{
    // pass a add menu messages 
// pass tost messages    
    toast.success("Your Food Menu added successfully !", {
      position: "top-right"
    });
    navigate('/admin-login/add-menu');
    e.target.reset();

    })
}

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

{/* ADD MENU FORM */}
<div className="bg-white rounded-[32px] p-8 shadow-sm m-6">
<ToastContainer />
<h2 className="text-4xl text-[#6c1118] mb-6 heading-font">
Add New Menu
</h2>

<form onSubmit={addMenuData}  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>

{/* Upload Photo */}
<div>
<label className="block mb-2 font-semibold">
Menu Photo
</label>

<input
type="text"
name="photo" ref={photo}
className="w-full border rounded-xl p-3"
required
/>
</div>

{/* Menu Name */}
<div>
<label className="block mb-2 font-semibold">
Menu Name
</label>

<input
type="text"
name="name" ref={name}
placeholder="Enter menu name"
className="w-full border rounded-xl p-3"
required
/>
</div>

{/* Category */}
<div>
<label className="block mb-2 font-semibold">
Category
</label>

<select
name="category" ref={category}
className="w-full border rounded-xl p-3"
required
>
<option value="">Select Category</option>
<option value="Pizza">Pizza</option>
<option value="Burger">Burger</option>
<option value="Drinks">Drinks</option>
<option value="Dessert">Dessert</option>
</select>
</div>

{/* Old Price */}
<div>
<label className="block mb-2 font-semibold">
Old Price
</label>

<input
type="number"
name="oldPrice" ref={oldprice}
placeholder="Enter old price"
className="w-full border rounded-xl p-3"
required
/>
</div>

{/* Offer Price */}
<div>
<label className="block mb-2 font-semibold">
Offer Price
</label>

<input
type="number"
name="offerPrice" ref={offerprice}
placeholder="Enter offer price"
className="w-full border rounded-xl p-3"
required
/>
</div>

{/* Quantity */}
<div>
<label className="block mb-2 font-semibold">
Quantity
</label>

<input
type="number"
name="qty" ref={qty}
placeholder="Enter quantity"
className="w-full border rounded-xl p-3"
required
/>
</div>

{/* Description */}
<div className="md:col-span-2">
<label className="block mb-2 font-semibold">
Description
</label>

<textarea
name="description" ref={description}
placeholder="Enter menu description"
rows="4"
className="w-full border rounded-xl p-3"
required
></textarea>
</div>

{/* Submit Button */}
<div className="md:col-span-2">
<button
type="submit"
className="bg-[#7c151b] text-white px-8 py-3 rounded-xl hover:bg-[#5d0f14] transition"
>
Add Menu
</button>
</div>

</form>
</div>

{/* MANAGE MENU */}
<div className="bg-white rounded-[32px] p-6 shadow-sm m-6">

<div className="flex items-center justify-between mb-6">
<button className="bg-[#7c151b] text-white px-5 py-3 rounded-xl">
Manage All Menu
</button>
</div>

<div className="overflow-x-auto">
<table className="w-full">

<thead>
<tr className="text-left text-gray-500 border-b">
<th className="pb-4">Photo</th>
<th className="pb-4">Name</th>
<th className="pb-4">Category</th>
<th className="pb-4">Old Price</th>
<th className="pb-4">Offer Price</th>
<th className="pb-4">Qty</th>
<th className="pb-4">Description</th>
<th className="pb-4">Action</th>
</tr>
</thead>

<tbody className="divide-y">
{/* loop for fetch all menu data */}
{foodmenu && foodmenu.map((item)=>{
    return (
        <>
         <tr

className="hover:bg-gray-50 transition"
>

<td className="py-5">
<img
src={item.photo}
alt=""
className="w-20 h-20 rounded-xl object-cover"
/>
</td>

<td className="py-5">{item.name}</td>

<td className="py-5">{item.category}</td>

<td className="py-5">{item.oldprice}</td>

<td className="py-5">{item.offerprice}</td>

<td className="py-5">{item.qty}</td>

<td className="py-5"><div className="w-60 h-40 overflow-auto">{item.description}</div></td>
<td>
<button onClick={()=>{navigate(`/admin-login/delete-menu/${item.id}`)}}
className='bg-red-500 text-white p-2 rounded-2xl'
>
<FaTrash />

</button>

<button
className='bg-blue-600 text-white p-2 ms-2 rounded-2xl'
>
<FaEdit />
</button>
</td>

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
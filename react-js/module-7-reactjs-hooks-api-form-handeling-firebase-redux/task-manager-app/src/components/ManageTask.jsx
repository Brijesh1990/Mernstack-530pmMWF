import React,{useState,useEffect} from 'react'
import { FaTrash,FaEdit } from 'react-icons/fa'
import HeaderApp from './HeaderApp'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ManageTask() {

// destructing of data 
const[task,setTask]=useState([]);
const navigate=useNavigate();
useEffect(()=>{
axios.get(`http://localhost:8000/addtask`).then((response)=>{
setTask(response.data)
})
},[task]) 


return (
<>
<HeaderApp />
{/* Page Container */}
<div className="max-w-7xl mx-auto animate-fade p-15">
{/* Heading */}
<div className="text-center mb-10">
<h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
Manage All Tasks
</h1>
<p className="text-gray-600 mt-3 text-lg">
View, edit and delete your tasks easily.
</p>
</div>
{/* Table Container */}
<div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
{/* Responsive Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
{/* Table Head */}
<thead className="bg-indigo-600 text-white">
<tr>
<th className="px-6 py-4">#</th>
<th className="px-6 py-4">Task Name</th>
<th className="px-6 py-4">Priority</th>
<th className="px-6 py-4">Added Date</th>
<th className="px-6 py-4">Task Details</th>
<th className="px-6 py-4 text-center">Actions</th>
</tr>
</thead>
{/* Table Body */}
<tbody className="divide-y divide-gray-200">
{/* Row 1 */}

{/* display all task */}

{task && task.map((items,index)=>{
return(<>

<tr className="hover:bg-indigo-50 transition duration-300">
<td className="px-6 py-4 font-semibold">{index+1}</td>
<td className="px-6 py-4">{items.taskName}</td>

<td className="px-6 py-4">
<span
className={`px-3 py-1 rounded-full text-sm font-semibold ${
items.taskPriority === "high"
? "bg-red-600 text-white"
: items.taskPriority === "medium"
? "bg-yellow-600 text-white"
: "bg-green-600 text-white"
}`}
>
{items.taskPriority}
</span>
</td>

<td className="px-6 py-4">{items.taskDate}</td>
<td className="px-6 py-4">
{items.taskDetails}
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-3">
{/* Edit Button */}

<button onClick={()=>{navigate(`/edit-task/${items.id}`)}} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md">
<FaEdit />
</button>

{/* Delete Button */}
<button type='button' onClick={()=>{navigate(`/delete-task/${items.id}`)}} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition duration-300 shadow-md">
<FaTrash />
</button>
</div>
</td>
</tr>



</>)
})}  

</tbody>
</table>
</div>
</div>
</div>
</>

)
}

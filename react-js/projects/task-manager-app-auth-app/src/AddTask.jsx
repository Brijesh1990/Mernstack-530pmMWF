import React,{useRef,useState,useEffect} from 'react'
import { FaUserCheck,FaBackspace } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HeaderApp from './HeaderApp'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function AddTask() {
const[data,setData]=useState("");
//fetch employee data from api
useEffect(()=>{
axios.get(`http://localhost:8000/addemployee`).then((response)=>{
setData(response.data);
})
},[data]) 
// add task  .........
const title=useRef("");
const description=useRef("");
const employee=useRef("");
const priority=useRef("");
const dueDate=useRef("");
const status=useRef("");
// http://localhost:8000/addtask
const addTask=(e)=>{
e.preventDefault();
var insert={
title:title.current.value,
description:description.current.value,
employee:employee.current.value,
priority:priority.current.value,
dueDate:dueDate.current.value,
status:status.current.value
}
// call api to post data in register api 
axios.post(`http://localhost:8000/addtask`,insert).then(()=>{
// pass a successfully 
// console.log(insert);
toast.success("Thanks for adding Task!", {
position: "top-right",
autoClose: 5000, // 5 seconds
});
// reset all form data 
e.target.reset();
})
}    
return (
<>

<div className='lg:w-1/2 md:w-1/2 sm:w-full p-15 mx-auto mt-2'>
<HeaderApp />
<div className='lg:w-full md:w-full sm:w-full p-0 mx-auto mt-0'>
<div className='bg-white p-5'>
<p className='text-3xl font-extrabold float-end text-blue-400'><Link to="/dashboard"><FaBackspace /></Link></p>   
<p className='text-center text-6xl font-extrabold'><FaUserCheck /></p>   
<h1 className='text-4xl text-black font-extrabold'>Add New Task</h1>
<ToastContainer
position="top-right"
autoClose={5000} // 5 seconds
hideProgressBar={false}
newestOnTop={true}
closeOnClick
pauseOnHover
draggable
theme="light"
/>
<form onSubmit={addTask}>
<div className="mt-2 p-2">
<input
type="text"
name="title" 
ref={title}
placeholder="Task Title *"
className="w-full border rounded-2xl p-3"
required
/>
</div>

<div className="mt-2 p-2">
<textarea
name="description" 
ref={description}
placeholder="Task Description *"
className="w-full border rounded-2xl p-3"
rows="4"
required
></textarea>
</div>

<div className="mt-2 p-2">
<select
name="employee" 
ref={employee}
className="w-full border rounded-2xl p-3"
required
>
<option value="">Assign Employee</option>
{/* filter user name in ascending order */}
{data && data.filter((items) => items.name).sort((a, b) => a.name.localeCompare(b.name)).map((items) => {
return(
<>
<option value={items.name}>{items.name}</option>
</>
)

})}

</select>
</div>

<div className="mt-2 p-2">
<select
ref={priority}
className="w-full border rounded-2xl p-3"
required
>
<option value="">Select Priority</option>
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="Low">Low</option>
</select>
</div>

<div className="mt-2 p-2">
<input
type="date"
name="dueDate" 
ref={dueDate}
className="w-full border rounded-2xl p-3"
required
/>
</div>

<div className="mt-2 p-2">
<select
name="status" 
ref={status}
className="w-full border rounded-2xl p-3"
>
<option value="Pending">Pending</option>
<option value="In Progress">In Progress</option>
<option value="Completed">Completed</option>
</select>
</div>

<div className="mt-4 p-2">
<button
type="submit"
className="bg-yellow-400 p-3 rounded-2xl w-full text-black font-bold"
>
Add Task
</button>
</div>
</form>
</div>
</div>
</div>
</>
)
}

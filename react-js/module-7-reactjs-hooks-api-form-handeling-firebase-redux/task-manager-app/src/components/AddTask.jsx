import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function AddTask() {

// stored form data via ref
const taskName=useRef("");
const taskPriority=useRef("");
const taskDate=useRef("");
const taskDetails=useRef("");
const navigate=useNavigate();
// create a forHandeling function 
const addTaskData=(e)=>{

e.preventDefault();
var insertTaskData={
taskName:taskName.current.value,
taskPriority:taskPriority.current.value,
taskDate:taskDate.current.value,
taskDetails:taskDetails.current.value,
}

// call post api to add data in api 

axios.post(`http://localhost:8000/addtask`,insertTaskData).then(()=>{
// pass a messages 

Swal.fire({
title: "Wow!",
text: "Your task successfully added!",
icon: "success"
});

navigate('/');
e.target.reset();

})
}


return (
<>
{/* Main Container */}
<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-15">
{/* Left Side Animated GIF */}
<div className="flex justify-center floating">
<img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIS0ZzloO0c39mbPdm1hBbjBmRHwewMFjAg&s"
alt="Task Animation"
className="w-full max-w-md rounded-3xl shadow-2xl"
/>
</div>
{/* Right Side Form */}
<div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl fade-in">
<h2 className="text-4xl font-bold text-indigo-700 mb-2">Add New Task</h2>
<p className="text-gray-500 mb-8">
Organize your daily tasks efficiently.
</p>
{/* Form */}
<form className="space-y-6" onSubmit={addTaskData}>
{/* Task Name */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Task Name
</label>
<input
type="text" ref={taskName}
placeholder="Enter task name"
className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300"
/>
</div>
{/* Priority */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Priority
</label>
<select ref={taskPriority} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300">
<option>Select Priority</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
</select>
</div>
{/* Added Date */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Added Date
</label>
<input
type="date" ref={taskDate}
className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300"
/>
</div>
{/* Task Details */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Task Details
</label>
<textarea ref={taskDetails}
rows={4}
placeholder="Write task details..."
className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300 resize-none"
defaultValue={""}
/>
</div>
{/* Add Button */}
<button
type="submit"
className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
>
+ Add Task
</button>
</form>
</div>
</div>
</>

)
}

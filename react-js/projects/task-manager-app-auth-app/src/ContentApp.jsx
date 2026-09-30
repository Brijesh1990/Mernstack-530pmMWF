import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaFileLines, FaArrowRight } from "react-icons/fa6";
import axios from "axios";

export default function ContentApp() {
//fetch task data  
const [taskData, setTaskData] = useState([]);
const navigate=useNavigate();
useEffect(() => {
axios.get(`http://localhost:8000/addtask`).then((response) => {
setTaskData(response.data);
});
}, [taskData]);

return (
<div className="min-h-screen bg-gray-100 p-4 md:p-6">
{/* Create Button */}
<Link to="/add-task">
<button
className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-bold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95"
>
+ Create New Task
</button>
</Link>

{/* Heading */}

<h1 className="mt-6 flex items-center gap-3 text-2xl font-bold text-gray-800">
<FaFileLines className="text-green-700" />
Manage Task
</h1>
{/* Statistics */}
<div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-md font-medium">Total Tasks</h3>
<p className="mt-2 text-white rounded-full p-2 bg-red-600">{taskData?.length || 0} Tasks</p>
</div>

<div className="rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-md font-medium">Dashboard CMS</h3>
<p className="mt-2 text-gray-500">65 Tasks</p>
</div>

<div className="rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
<h3 className="text-sm font-medium">Mobile App</h3>
<p className="mt-2 text-gray-500">12 Tasks</p>
</div>

</div>

{/* Task List */}
{taskData && taskData.map(((task,index)=>{
return(
<>
<div className="mt-8 space-y-5">

<div
className="rounded-2xl bg-gradient-to-r from-green-700 to-green-900 p-5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
>

<div className="flex flex-col gap-4 sm:flex-row sm:items-center">

{/* Number */}

<div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black shadow-md transition duration-300 group-hover:rotate-12">
{index + 1}
</div>

{/* Content */}

<div className="flex-1">

<h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition">
{task.title}
</h3>

<p className="mt-1 text-sm text-gray-200">
📅 {task.dueDate}
</p>


<p className="mt-1 text-sm text-gray-200">
📅 {task.employee}
</p>


<p className="mt-1 text-sm text-gray-200">
📅 {task.priority}
</p>

<p>

<button onClick={()=>navigate(`/delete-task/${task.id}`)} className="mt-2 rounded-full bg-red-500 py-1 px-4 text-white hover:bg-red-600">
  Delete
</button>

<button  onClick={()=>navigate(`/edit-task/${task.id}`)} className="mt-2 ml-2 rounded-full bg-blue-500 py-1 px-4 text-white hover:bg-blue-600">
  Edit
</button>



</p>

</div>
{/* Arrow */}
<Link
to="/task-description"
className="group block"
>
<FaArrowRight
className="text-2xl text-yellow-400 transition duration-300 group-hover:translate-x-3"
/>
</Link>
</div>
</div>
</div>
</>
)
}))}

</div>
)
}

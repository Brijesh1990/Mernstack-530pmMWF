import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
// stored form data via ref
const name=useRef("");
const photo=useRef("");
const old_price=useRef("");
const new_price=useRef("");
const description=useRef("");
const navigate=useNavigate();
// create a forHandeling function 
const addTaskData=(e)=>{
e.preventDefault();
  const formData = new FormData();
  formData.append("name", name.current.value);
  formData.append("photo", photo.current.files[0]); // actual file
  formData.append("old_price", old_price.current.value);
  formData.append("new_price", new_price.current.value);
  formData.append("description", description.current.value);

  try {
    const res = axios.post(
      "http://brijeshguru.com/api/add_product.php",
      formData
    );

    console.log(res.data);

    Swal.fire({
      title: "Success!",
      text: "Product added successfully!",
      icon: "success",
    });

    e.target.reset();
    navigate("/");
  } catch (err) {
    console.log(err);

    Swal.fire({
      title: "Error!",
      text: "Failed to add product.",
      icon: "error",
    });
  }

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
<h2 className="text-4xl font-bold text-indigo-700 mb-2">Add New Products</h2>
<p className="text-gray-500 mb-8">
Organize your daily tasks efficiently.
</p>
{/* Form */}
<form className="space-y-6" onSubmit={addTaskData} encType='multipart/form-data'>
{/* Task Name */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Product Name
</label>
<input
type="text" ref={name}
placeholder="Enter Product name"
className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300"
/>
</div>
{/* Priority */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Upload photo
</label>

<input
type="file" ref={photo}
placeholder="Enter Product Photo"
className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300"
/>
</div>
{/* Added Date */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Old Price
</label>
<input
type="text" ref={old_price} placeholder='Old Price'
className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300"
/>
</div>


<div>
<label className="block mb-2 font-semibold text-gray-700">
New Price
</label>
<input
type="text" ref={new_price} placeholder='Old Price'
className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition duration-300"
/>
</div>

{/* Task Details */}
<div>
<label className="block mb-2 font-semibold text-gray-700">
Details
</label>
<textarea ref={description}
rows={4}
placeholder="Write product details..."
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

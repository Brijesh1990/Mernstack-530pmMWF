import React,{useRef} from 'react'
import { FaUserCheck,FaBackspace } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HeaderApp from './HeaderApp'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function AddEmployee() {
// create an account .........
const name=useRef("");
const address=useRef("");
const age=useRef("");
const phone=useRef("");
// create account stored data in api 
// http://localhost:8000/addemployee
const addEmployee=(e)=>{
e.preventDefault();
var insert={
name:name.current.value,
address:address.current.value,
age:age.current.value,
phone:phone.current.value
}
// call api to post data in register api 
axios.post(`http://localhost:8000/addemployee`,insert).then(()=>{
// pass a successfully 
// console.log(insert);
toast.success("Thanks for add Employee!", {
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
<div className='lg:w-full md:w-full sm:w-full p-0 mx-auto mt-0'>
<div className='bg-white p-5'>
<p className='text-3xl font-extrabold float-end text-blue-400'><Link to="/dashboard"><FaBackspace /></Link></p>   
<p className='text-center text-6xl font-extrabold'><FaUserCheck /></p>   
<h1 className='text-4xl text-black font-extrabold'>Add New Employee</h1>
<form onSubmit={addEmployee}>
<div className="mt-2 p-2">
<input
type="text" ref={name}
placeholder="Employee Name *"
className="w-full border rounded-2xl p-3"
required
/>
</div>

<div className="mt-2 p-2">
<textarea
name={address}
placeholder="Employee Address *"
className="w-full border rounded-2xl p-3"
rows="4"
required
></textarea>
</div>

<div className="mt-2 p-2">
<input
type="text"
ref={age}
placeholder="Employee Age *"
className="w-full border rounded-2xl p-3"
required
/>
</div>

<div className="mt-2 p-2">
<input
type="text"
ref={phone}
placeholder="Employee Phone *"
className="w-full border rounded-2xl p-3"
required
/>
</div>


<div className="mt-4 p-2">
<button
type="submit"
className="bg-yellow-400 p-3 rounded-2xl w-full text-black font-bold"
>
Add Employee
</button>
</div>
</form>
</div>
</div>
</div>
</>
)
}

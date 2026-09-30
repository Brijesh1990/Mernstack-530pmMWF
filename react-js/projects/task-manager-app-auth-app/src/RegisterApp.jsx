import React,{useRef} from 'react'
import { FaUserCheck,FaBackspace } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function RegisterApp() {
// create an account .........
const fullname=useRef("");
const email=useRef("");
const password=useRef("");
const cpassword=useRef("");
const gender=useRef("");
const phone=useRef("");
const address=useRef("");
// create account stored data in api 
// http://localhost:8000/register
const addAccount=(e)=>{
e.preventDefault();
var insert={
fullname:fullname.current.value,
email:email.current.value,
password:password.current.value,
cpassword:cpassword.current.value,
gender:gender.current.value,
phone:phone.current.value,
address:address.current.value
}
// call api to post data in register api 
axios.post(`http://localhost:8000/register`,insert).then(()=>{
// pass a successfully 
// console.log(insert);
toast.success("Thanks for creating your account!", {
  position: "top-right",
  autoClose: 5000, // 5 seconds
});
// reset all form data 
e.target.reset();

})

}
return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-green-100 px-4 py-10">

<div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 animate-fade-in transition-all duration-500 hover:shadow-green-300 hover:scale-[1.02]">

{/* Back Button */}
<div className="flex justify-end">
<Link
to="/"
className="text-3xl text-blue-500 hover:text-blue-700 transition-all duration-300 hover:-translate-x-1"
>
<FaBackspace />
</Link>
</div>

{/* User Icon */}
<div className="flex justify-center mt-2">
<div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-lg animate-bounce">
<FaUserCheck className="text-5xl text-green-700" />
</div>
</div>

{/* Heading */}
<div className="text-center mt-6">
<h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
Create Account
</h1>

<p className="text-gray-500 mt-2 text-sm sm:text-base">
Join us and manage your tasks efficiently.
</p>
</div>
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
{/* Form */}
<form className="mt-8 space-y-4" onSubmit={addAccount}>

<input
type="text" ref={fullname}
placeholder="Full Name"
className="w-full rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"
/>

<input
type="email" ref={email}
placeholder="Email Address"
className="w-full rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"
/>

<input
type="password"
placeholder="Password" ref={password}
className="w-full rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"
/>

<input
type="password"
placeholder="Confirm Password" ref={cpassword}
className="w-full rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"
/>


Male :<input
type="radio" ref={gender} value="male"
className="w-auto rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"
/>


Female :<input
type="radio" ref={gender} value="female"
className="w-auto rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"
/>


<input
type="text"
placeholder="Phone" ref={phone}
className="w-full rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"
/>


<textarea
placeholder="Address" ref={address}
className="w-full rounded-xl border border-gray-300 p-3 outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-200"></textarea>


<button
type="submit"
className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold shadow-lg hover:bg-yellow-500 hover:shadow-yellow-300 active:scale-95 transition-all duration-300"
>
Create an Account
</button>

</form>

{/* Login Link */}
<div className="mt-6 text-center text-sm sm:text-base">
<span className="text-gray-600">
Already have an account?
</span>{" "}
<Link
to="/login"
className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
>
Login
</Link>
</div>

</div>

</div>
)
}

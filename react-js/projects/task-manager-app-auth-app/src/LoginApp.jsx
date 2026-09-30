import React,{useRef} from 'react'
import { FaUserCheck,FaBackspace } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
export default function LoginApp() {
  // create a login with email and password 
  const email=useRef("");
  const password=useRef("");
  const navigate=useNavigate();
  // create a function for login 
  const addLoginForm = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/register`)
      .then((response) => {
        const users = response.data;
        const user = users.find(
          (item) =>
            item.email === email.current.value &&
            item.password === password.current.value
        );

        if (user) {
          toast.success("Login Successfully!", {
            position: "top-right",
            autoClose: 5000,
          });

          // add promises
          setTimeout(()=>{
          navigate('/dashboard')
          },5000)

        } else {
          toast.error("Invalid Email or Password!", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      })
      .catch((error) => {
        toast.error("Server Error!", {
          position: "top-right",
          autoClose: 5000,
        });

        console.log(error);
      });

  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-yellow-100 p-4">

  <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-green-200 animate-fade-in">

    {/* Back Button */}
    <div className="flex justify-end">
      <Link
        to="/"
        className="text-3xl text-blue-500 hover:text-blue-700 transition duration-300 hover:-translate-x-1"
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
        Sign In
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back! Please login to continue.
      </p>
    </div>

    {/* Form */}

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
    <form onSubmit={addLoginForm} className="mt-8 space-y-5">

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

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition-all duration-300 rounded-xl py-3 font-bold text-black shadow-lg hover:shadow-yellow-300"
      >
        Login
      </button>

    </form>

    {/* Register */}
    <div className="text-center mt-6">
      <p className="text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition"
        >
          Register
        </Link>
      </p>
    </div>

  </div>

</div>
  )
}

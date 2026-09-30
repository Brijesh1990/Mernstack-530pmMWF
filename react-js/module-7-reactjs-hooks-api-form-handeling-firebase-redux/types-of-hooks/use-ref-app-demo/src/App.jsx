import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
/*  
useRef is a types of hooks 
useRef are pass a reference of user input data 
useRef also used to edit or update user reference data
useRef also used to pass a reference of user input using ref attribute
useRef in comes from react
examples : 

useRef("")

*/

/* promises : 

  async() : async() is used to asynchronous data load or operations default load by async
            async is always defined when we create a function  
            
            async function app()
            {
               
              statements;
            
            }

    await : await is an keyword used in promises 
            await is performed when any action will completed 
            await is stopped execution of operation untill promise is not completed  
            
            var insertUser=await{
                 statements;
                }
  
*/ 
export default function App() {
// fetch data using useEffect
const[data,setData]=useState("");

useEffect(()=>{
  // fetch data 
  axios.get(`http://localhost:8000/users`).then((response)=>{
    setData(response.data);

  })
},[data])
// use useRef to stored all form data
const fname=useRef("");
const lname=useRef("");
const email=useRef("");
const phone=useRef("");
const uname=useRef("");
const role=useRef("");
const address=useRef("");
const password=useRef("");
const confirmpassword=useRef("");
// create a function to add users when user click to add on button 
async function addUsersData(e){
e.preventDefault();
// stored data via form using axios
var insertUser=await{
fname:fname.current.value,
lname:lname.current.value,
email:email.current.value,
phone:phone.current.value,
uname:uname.current.value,
role:role.current.value,
address:address.current.value,
password:password.current.value,
confirmpassword:confirmpassword.current.value

}

// used axios 
axios.post(`http://localhost:8000/users`,insertUser).then(()=>{
// pass a success message 
toast("Thanks for add users !");
})
e.target.reset();

}

return (
<div className="container py-5 w-75 mx-auto mt-5">
<div className="card shadow-sm">
<div className="card-header bg-primary text-white">
<h4 className="mb-0">Add User</h4>
</div>
<div className="card-body">
<ToastContainer  />
<form onSubmit={addUsersData}>
<div className="row g-3">
{/* First Name */}
<div className="col-md-6">
<label className="form-label">First Name</label>
<input
type="text" ref={fname}
className="form-control" required
placeholder="Enter first name"
/>
</div>
{/* Last Name */}
<div className="col-md-6">
<label className="form-label">Last Name</label>
<input
type="text" ref={lname}
className="form-control" required
placeholder="Enter last name"
/>
</div>
{/* Email */}
<div className="col-md-6">
<label className="form-label">Email</label>
<input
type="email" ref={email} required
className="form-control"
placeholder="Enter email"
/>
</div>
{/* Phone */}
<div className="col-md-6">
<label className="form-label">Phone</label>
<input
type="tel" ref={phone}
className="form-control"
placeholder="Enter phone number"
/>
</div>
{/* Username */}
<div className="col-md-6">
<label className="form-label">Username</label>
<input
type="text" ref={uname}
className="form-control"
placeholder="Enter username"
/>
</div>
{/* Role */}
<div className="col-md-6">
<label className="form-label">Role</label>
<select className="form-select" ref={role}>
<option selected="">Select Role</option>
<option value="admin">Admin</option>
<option value="manager">Manager</option>
<option value="user">User</option>
</select>
</div>
{/* Address */}
<div className="col-12">
<label className="form-label">Address</label>
<textarea ref={address}
className="form-control"
rows={3}
placeholder="Enter address"
defaultValue={""}
/>
</div>
{/* Password */}
<div className="col-md-6">
<label className="form-label">Password</label>
<input
type="password" ref={password}
className="form-control"
placeholder="Enter password"
/>
</div>
{/* Confirm Password */}
<div className="col-md-6">
<label className="form-label">Confirm Password</label>
<input
type="password" ref={confirmpassword}
className="form-control"
placeholder="Confirm password"
/>
</div>
{/* Buttons */}
<div className="col-12 text-end">
<button type="reset" className="btn btn-secondary">
Reset
</button>
<button  type="submit" className="btn btn-primary ms-2">
Save User
</button>
</div>
</div>
</form>
</div>
</div>
{/* display all data  */}
<table className='table table-responsive mt-5 border'>
  {data && data.map((row)=>{
    return(<>
  <tr>
    <td>{row.fname}</td>
    <td>{row.lname}</td>
    <td>{row.email}</td>
    <td>{row.phone}</td>
    <td>{row.role}</td>
    <td>{row.address}</td>
   
  </tr>
    </>) 
  })}
 
</table>
</div>

)
}

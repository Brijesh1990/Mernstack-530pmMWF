import React, {useState} from "react"
import Swal from "sweetalert2";
//create a function 
function App()
{
//destructuring of state 
const[data,setData]=useState({
name:"",
email:"",
phone:"",
age:"",
salary:""

});

//create a form handelChange

const handelChangeForm=(e)=>{
const {name , value} =e.target;
//update the input data 
setData({
...data,
[name]:value
})

}

//create a form handeling Data 

const addFormData=(e)=>{

//prevent the form from refresh after form submitted

e.preventDefault();

console.log(data);

// alert('my name and email is :'+data.name + data.email)

//sweet alert messages

// Swal.fire({
//   title: "Form handeling output?",
//   text: "My Name is :"+data.name  + "\n" + "My email is :"+data.email,
//   icon: "question"
// });

}



return(
<>
<h2>Form Data Handel</h2>
<form onSubmit={addFormData}>
name : <input type="text" name="name" value={data.name} onChange={handelChangeForm} />
<br/><br/>
email : <input type="text" name="email"  value={data.email} onChange={handelChangeForm} />
<br/><br/>

phone : <input type="text" name="phone" value={data.phone} onChange={handelChangeForm} />
<br/><br/>
age : <input type="text" name="age" value={data.age} onChange={handelChangeForm} />
<br/><br/>
salary : <input type="text" name="salary" value={data.salary} onChange={handelChangeForm} />
<br/><br/>
<input type="submit" value="Submit" />
</form>        
</>
)

} 


export default App
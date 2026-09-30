import React,{useState} from "react";
function NameMultipleApp()
{
//destructuring odf state 
const[name,setName]=useState({
    id:1,
    name:"Brijesh kumar pandey",
    age:35,
    salary:89500,
    address:"150 feet ring road rajkot"
});

// create a function for multiple data update via state 
const updData=()=>{
    setName({
    id:1,
    name:"Aksh patel",
    age:21,
    salary:9500,
    address:"behind navrangpura Ahemdabad 360005"
    })
}

 return(
    <>
        <div className="app">
           
           <h1>Employee Id is  : {name.id}</h1> 
           <h2>Employee Name is  : {name.name}</h2> 
           <h3>Employee Age is  : {name.age}</h3> 
           <h4>Employee salary is  : {name.salary}</h4> 
           <h5>Employee Address is  : {name.address}</h5> 
           <button type="button" onClick={updData}>Change All ?</button>
        </div>
    </>
 )   
}

export default NameMultipleApp
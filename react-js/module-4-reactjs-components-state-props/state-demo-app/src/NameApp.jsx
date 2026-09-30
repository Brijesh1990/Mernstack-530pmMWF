import React,{useState} from "react";
function NameApp()
{
//destructuring odf state 
const[name,setName]=useState("Brijesh kumar pandey");
 return(
    <>
        <div className="app">
           <h1>My name is : {name}</h1> 
           <button type="button" onClick={()=>setName("Aksh Patel")}>Change Name ?</button>
        </div>
    </>
 )   
}

export default NameApp
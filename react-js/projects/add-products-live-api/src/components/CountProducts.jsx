import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function CountProducts() {
    // destructing of data 
  const[task,setTask]=useState([]);
useEffect(() => {
  axios.get("http://brijeshguru.com/api/get_products.php")
    .then((response) => {
      console.log("API Response:", response.data);  
      setTask(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
    return (
    <div>
      <span className="rounded-full p-1 text-sm bg-red-600 text-white">{task.length}</span>
    </div>
  )
}

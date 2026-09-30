import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function CountTask() {
    // destructing of data 
    const[task,setTask]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/addtask`).then((response)=>{
            setTask(response.data)
        })
    },[task]) 
  
    return (
    <div>
      <span className="rounded-full p-1 text-sm bg-red-600 text-white">{task.length}</span>
    </div>
  )
}

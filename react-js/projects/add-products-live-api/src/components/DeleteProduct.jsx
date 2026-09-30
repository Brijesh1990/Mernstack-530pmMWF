import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function DeleteTask() {

  const navigate=useNavigate();
  const {id}=useParams();
  //delete api ...
  useEffect(()=>{

  Swal.fire({
  title: "Do you want to Delete tasks?",
  showDenyButton: true,
  showCancelButton: true,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) 
    axios.delete(`http://localhost:8000/addtask/${id}`).then(()=>{
    Swal.fire("Task deleted  successfully ", "", "success");
  
    })
  
    else if (result.isDenied) 
    
      Swal.fire("sorry you cancelled delete", "", "info");
}); 

      navigate('/manage-task');
      

    })

  return (
    <div>
      
    </div>
  )
}

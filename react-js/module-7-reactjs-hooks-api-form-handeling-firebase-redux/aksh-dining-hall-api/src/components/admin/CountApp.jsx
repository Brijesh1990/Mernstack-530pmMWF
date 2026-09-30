import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function CountApp() {
const[data,setData]=useState([]);
// fetch api using useEffect() hooks
useEffect(()=>{
axios.get(`http://localhost:8000/feedback`).then((response)=>{

setData(response.data);
})
},[data])
return (
<div>
{data.length}
</div>
)
}

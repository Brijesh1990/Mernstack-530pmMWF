import React,{useState,useEffect} from 'react'

export default function EmployeeData() {
    // fetch api data from https://jsonplaceholder.typicode.com/users

    const[data,setData]=useState([]);
    // fetch data from api 
    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then((users) => {
        setData(users);
        })
        
    },[data])
  return (
    <>
    <h1>Fetch All data using(fetch method)</h1>
    <div className='app'>
    {data && data.map((items)=>{
        return(<>
             <div className='child'>
            <p>users is is :{items.id}</p>
            <p>users is is :{items.name}</p>
            <p>users is is :{items.email}</p>
        </div>
        </>)
    })}     
    
    </div>
    </>
  )
}

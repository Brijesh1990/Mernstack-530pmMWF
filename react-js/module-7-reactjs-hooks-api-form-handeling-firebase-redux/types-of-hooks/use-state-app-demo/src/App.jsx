import React,{useState} from 'react'
/*  
what is useState ? 

 1. useState is types of hooks in react js 
 2. useState stored data in object 
 3. useState are used to stored any type of data 
    examples :  number | boolean | object | array | symbol 
 4. useState is destructuring data in array 
    const[variable.function]=useState(0);
    
 Note : useState destructuring data for update data one component to another component
    
*/
// export default function App() {
//   const[name,setName]=useState("Brijesh");
//   return (
//     <div>
//       <h1>MY name is :{name}</h1>
//       <button type='button' onClick={()=>setName("Akash")}>Change data</button>
//     </div>
//   )
// }



// initialized multiple data in state 

export default function App() {
  const[name,setName]=useState({
    "id":101,
    "name":"brijesh",
    "age":35,
    "department":"IT",
    "salary":115600 
  });

  // create a function to change all data 
  const updData=()=>{

    setName(
      
   {
  
    "id":102,
    "name":"Akash",
    "age":22,
    "department":"CSE",
    "salary":15600 
     
    }
    )

  }
  return (
    <div className='app'>
      <h3>Change all data via useState hook</h3>

      <p align="left">My ID is : {name.id} <br /> and my name is : {name.name} <br /> my age is : {name.age} <br /> and i am work in : {name.department} <br /> and my salary is : {name.salary}</p>
      
      <button type='button' onClick={updData}>Change data</button>
    </div>
  )
}



// useState is also used in form handeling 
// useState is used in controlled components 
// usState data initialized and update state data
// each values of userInput onchange
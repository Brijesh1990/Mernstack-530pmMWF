import React,{useEffect,useState} from 'react'
// hooks always defined at top of applications
// hooks should not be conditional
// useeffects is used for provide  effects | fetch data | fetch informations | render data on based on dependnencies 
// useeffects are pass some dependnecies 


// no dependnencies  : render again and again 
// with blank array as dependnecies [] : render one times 
// with pass as parameter props and state in dependnecies [props,state] render one times but data should be changed on run times 

export default function App() {
  const[count,setCount]=useState(0);
  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount((cnt)=> cnt + 1)
  //   },3600)
  // })


  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount((cnt)=> cnt + 1)
  //   },3600)
  // },[])


   useEffect(()=>{
    setTimeout(()=>{
      setCount((cnt)=> cnt + 1)
    },3600)
  },[count])


  return (
    <div>
     <h1>count values is :{count}</h1>    
    </div>
  )
}

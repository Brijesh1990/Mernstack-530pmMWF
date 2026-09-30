import React,{ useState} from "react";
function CounterApp()
{
// destructured state 
const[count,setCount]=useState(0);
 return(
    <>
        <div className="counter-app">
            <h1>The count default values is : {count}</h1>
            <button type="button" onClick={()=>setCount(count+1)}>+</button>
            <button type="button" onClick={()=>setCount(count-1)}>-</button>
            <button type="button" onClick={()=>setCount(0)}>Reset</button>
        </div>
    </>
 )
}
export default CounterApp
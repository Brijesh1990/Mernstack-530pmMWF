import React,{useState} from "react";
function CounterApp()
{
  // destructuring state
  const[count,setState]=useState(0);
  return (
    <>
      <div className="clc">
        <h1>counter values is : {count}</h1>
        <button type="button" onClick={()=>setState(count+1)}>➕</button>
        <button type="button" onClick={()=>setState(count-1)}>➖</button>
        <button type="button" onClick={()=>setState(0)}>0️⃣</button>
      </div>
    </>
  )
}
export default CounterApp
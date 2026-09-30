import React,{useCallback} from 'react'
/* useCallback : is used to memoize the function 
                 useCallback is used to memoize function for callback again or reused again

*/
export default function App() {
  // using callback
  const handelClk=
    useCallback(()=>{
     console.log("clicked")
    },[]);

  return (
    <div>
    <button type='button' onClick={handelClk}>Click Me</button>    
    </div>
  )
}

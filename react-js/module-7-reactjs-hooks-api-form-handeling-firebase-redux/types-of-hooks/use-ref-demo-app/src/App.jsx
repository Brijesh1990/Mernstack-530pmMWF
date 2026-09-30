import React,{useRef} from "react";
// useRef is take an reference of input or stored input data 
// useRef handel form input data 
// useRef is also called form handeling uncontrolledComponents 

function App()
{
  // stored input values 
  const inputName=useRef();
  // create a function 
  const addData=(e)=>{
    e.preventDefault();
    var ins={
      inputName:inputName.current.value
    }
    // print data 
    console.log("Name is : ",ins)
  }

  return(
    <>
     <form className="frm" onSubmit={addData}>
      <input type="text" ref={inputName} placeholder="Name *"/>
      <input type="submit" onClick={()=>inputName.current.focus()} value="Submit" />
     </form>       
    </>
  ) 
}
export default App
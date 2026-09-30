import React from "react";
function ChildApp(props)
{
    return (
    <>
    <div className="app">
      <h1>Students Name is :{props.name}</h1>
      <h2>students age is :{props.age}</h2>
      <h3>Enrolled in :{props.course}</h3>
      </div>
    </>
    )
}
export default ChildApp
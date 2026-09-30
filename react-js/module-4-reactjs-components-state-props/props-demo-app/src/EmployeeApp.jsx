import React from "react";
function EmployeeApp(props)
{
    return(
        <>
        <div className="app">
         <h1>employee Id 🆔 :{props.id}</h1>
         <h2>employee fullName 👤:{props.fullname}</h2>
         <h3>employee salary 💲:{props.salary}</h3>
         <h6>employee address 🌐:{props.address}</h6    >
         </div>
        </>
    )

}

export default EmployeeApp
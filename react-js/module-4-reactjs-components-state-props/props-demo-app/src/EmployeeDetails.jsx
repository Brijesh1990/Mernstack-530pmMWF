import React from "react";
// props used as destructuring or props drilling 
function EmployeeDetails({fname,lname,age,salary,address})
{
    return(
        <>
        <div className="app">
            <p><b>FirstName :</b>{fname}</p>
            <p><b>LastName :</b>{lname}</p>
            <p><b>Age :</b>{age}</p>
            <p><b>salary :</b>{salary}</p>
            <p><b>Address :</b>{address}</p>
        </div>

        </>
    )

}
export default EmployeeDetails


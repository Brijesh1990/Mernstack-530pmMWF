import React from "react";
import Data from "./Data";
function EmployeeData()
{
 return (
    <>

      {/* display all employee data */}
       <h1 align="center">All Employee Data</h1>
        <div className="app">
            {/* applied loop to fetch all dynamic data  */}
            {Data && Data.map((item)=>{
                return(
                    <>
                      <div className="emp-grid">
                      <p><img src={item.photo} alt="photo" /></p>
                      <p><b>Id is :</b>{item.id}</p>
                      <p><b>Name is :</b>{item.name}</p>
                      <p><b>Age is :</b>{item.age}</p>
                      <p><b>Salary is :</b>{item.salary}</p>
                      </div>
                    </>
                )
            })}
           
        
        </div>

         {/* display only  employee data who's age is greater than 24 years */}
       <h1 align="center">Employee age greater 24 years </h1>
        <div className="app">
            {/* applied loop to fetch all dynamic data  */}
             {Data && Data.filter((item) => item.age > 24).map((item) => {
                return(
                    <>
                      <div className="emp-grid">
                      <p><img src={item.photo} alt="photo" /></p>
                      <p><b>Id is :</b>{item.id}</p>
                      <p><b>Name is :</b>{item.name}</p>
                      
                      <p><b>Age is :</b>{item.age}</p>
                      <p><b>Salary is :</b>{item.salary}</p>
                      </div>
                    </>
                )
            })}
           
        
        </div>
    </>
 )   
}
export default EmployeeData
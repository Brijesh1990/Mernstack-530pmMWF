import React,{Component} from 'react'
class EmployeeApp extends React.Component
{
    
        constructor(props)
        {
            super(props);
            this.state={
                empid:101,
                empname:"Akash Patel",
                empsalary:45000,
                pin:380015,
                department:"IT"

            }
        }

    render()
    {
        return(
            <div>
                <h1>Employee Details</h1>
                <p>Employee ID : {this.state.empid}</p>
                <p>Employee Name : {this.state.empname}</p>
                <p>Employee Salary : {this.state.empsalary}</p>
                <p>Employee Pin : {this.state.pin}</p>
                <p>Employee Department : {this.state.department}</p>
            </div>
        )
    }

}
export default EmployeeApp
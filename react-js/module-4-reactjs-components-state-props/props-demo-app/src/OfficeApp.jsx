import React from "react";
import { FaUserCheck,FaIndent,FaBook,FaMapMarker } from "react-icons/fa";
// prps destructuring or props drilling 
function OfficeApp({name,id,dep,address})
{
    return (
        <>
           <div className="app">
            <p><b><FaUserCheck/> Name :</b>{name}</p>
            <p><b><FaIndent/>Id :</b>{id}</p>
            <p><b><FaBook/>Departments :</b>{dep}</p>
            <p><b><FaMapMarker />Address is  :</b>{address}</p>
           </div>

        </>
    )
}

export default OfficeApp
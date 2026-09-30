import React from "react";
import { FaEye, FaUser, FaRupeeSign, FaAddressBook, FaFacebook,FaTwitter,FaInstagram,FaWhatsapp } from "react-icons/fa";
function IconsApp(props)
{
    return(
        <>
        <div className="app">
         <h1>employee Id  <FaEye /> :{props.id}</h1>
         <h2>employee fullName <FaUser /> :{props.fullname}</h2>
         <h3>employee salary <FaRupeeSign /> :{props.salary}</h3>
         <h6>employee address <FaAddressBook /> :{props.address}</h6    >
         <h1>Like us on : <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaWhatsapp /></h1>
         </div>
        </>
    )

}

export default IconsApp
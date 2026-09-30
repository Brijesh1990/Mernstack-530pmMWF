import React from "react";
const name="brijesh kumar pandey";
const age=36;
const edu="Mtech(IT)";
function Hello()
{
    return(
        <>
         <div className="app">
            <h1>My name is : {name}</h1>
            <h1>My age is : {age}</h1>
            <h1>My Education is : {edu}</h1>
         </div>   
        </>
    )
}

export default Hello
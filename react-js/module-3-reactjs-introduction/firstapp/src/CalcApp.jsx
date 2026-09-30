import React from "react";
const a=10;
const b=5;
const c=a+b;
const d=a-b;
const e=a*b;
const f=a/b;

function Calc()
{
    return (
        <>
            <div className="app">
             <h1>Additions of numbers :{c} </h1>
             <h1>Substractions of numbers :{d} </h1>
             <h1>Multiplications of numbers :{e} </h1>
             <h1>Divisions of numbers :{f} </h1>
            </div>
        </>
    )
}
export default Calc
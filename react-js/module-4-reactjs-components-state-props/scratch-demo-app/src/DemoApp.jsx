import React from "react";
const a=10;
const b=5;
const c=a+b;
const d=a-b;
const e=a*b;
const f=a/b;
function Demo()
{
return(
<>
<div className="app">
<h1 align='center'>The additions of numbers is :{c}</h1>
<h1 align='center'>The substractions of numbers is :{d}</h1>
<h1 align='center'>The Multiplications of numbers is :{e}</h1>
<h1 align='center'>The divisions of numbers is :{f}</h1>
</div>
</>
)
}
export default Demo
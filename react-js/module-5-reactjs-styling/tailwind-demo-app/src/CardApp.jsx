import React from 'react'
import Data from './Data'
export default function CardApp() {
return (
<>
<div className="w-full max-w-6xl p-4 sm:p-6 md:p-10 mt-10 md:mt-16 shadow-2xl mx-auto bg-white rounded-2xl">

<h1 className="text-xl sm:text-2xl md:text-4xl text-center animate-pulse underline mb-6">
Employee Details
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{Data && Data.map((items, index) => {
return (
<div
key={index}
className="shadow-xl p-6 rounded-xl text-center hover:scale-105 transition duration-300"
>
<img
src={items.photo}
alt={items.name}
className="mx-auto rounded-full w-20 h-20 border animate-bounce"
/>

<p className="mt-4 font-semibold">Name: {items.name}</p>
<p>Age: {items.age}</p>
<p>Salary: ₹{items.salary}</p>
</div>
);
})}

</div>
</div>
</>
)
}

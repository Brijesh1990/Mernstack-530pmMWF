import React from 'react'
const nm="tailwind";
export default function App() {
  return (
    <>
    <div className='w-1/2 bg-amber-500 rounded-2xl mt-16 p-10 mx-auto'>
      <h1 className='text-5xl text-white animate-bounce'>Hello : {nm}</h1>
    </div>

    <div className='w-60 h-60 bg-amber-500 rounded-full mt-16 p-10 mx-auto'>
      <h1 className='text-2xl mt-15 text-center text-white animate-bounce'>Hello : {nm}</h1>
    </div>


    <div className='w-60 h-60 bg-amber-500 rounded-full mt-16 p-10 mx-auto'>
      <h1 className='text-2xl mt-15 text-center text-white animate-bounce'>Hello : {nm}</h1>
    </div>

    </>
  )
}

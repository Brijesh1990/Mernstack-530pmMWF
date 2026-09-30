import React,{useLayoutEffect} from 'react'
/* 
useLayoutEffect is a React Hook that lets you run code synchronously after React updates the DOM but before the browser paints (displays) the updated screen.
or
Run before browser paint (display)

*/
export default function App() {
  useLayoutEffect(() => {
    console.log("Runs before paint or display");
  }, []);

  return (
    <div>
      <h1>Hello i am Using Hooks</h1>
    </div>
  )
}

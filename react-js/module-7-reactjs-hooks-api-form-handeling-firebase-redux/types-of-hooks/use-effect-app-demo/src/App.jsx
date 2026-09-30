import React,{useState,useEffect} from 'react'
/*  

what is useEffect hooks in react js ? 

 1.useEffect is a type of hooks 
 2.useEffect add some effects inside of your application ex. fetch data | add loader | add some effects after some times | change mode of design etc.
 
 3. useEffect pass some dependency that are 

    a) no dependency

       useEffect(()=>{
           //statements
        })

       Note : data render again and again 
       
       
    b) pass a blank array as dependency

       useEffect(()=>{

           //statements

        },[])

       Note : render once time data inside of applications 
      
       
        
    c) pass a props/state  as dependency

       useEffect(()=>{

           //statements

        },[props,state])

       Note : render once time data we can update data or change in data. 
      

*/



export default function App() {
const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#222" : "#fff";

    document.body.style.color = darkMode ? "#fff" : "#000";
  
   }, [darkMode]);


  // create a function toggle 
   const toggleTheme = () => {
    setDarkMode(!darkMode);
  }; 
  return (
    <div>

     <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

     <button onClick={toggleTheme} type='button'>Switch to {darkMode ? "Light" : "Dark"}</button>
      
    </div>
  )
}

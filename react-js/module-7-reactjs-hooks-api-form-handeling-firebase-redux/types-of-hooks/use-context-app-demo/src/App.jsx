import React,{createContext,useContext} from 'react'

// 1. its used just like a useState
// 2. its is handel a complex logic statement managements 
// 3. useContext is handel the complex logic of data in react js 
// 4. useContext is used instead of useState

const themeContext=createContext("light");
function App() {
  return (
    <div>
      <themeContext.Provider value='dark'>
      <ThemeApp />
      </themeContext.Provider>
    </div>

   
  )
}

// create child 
function ThemeApp()
{
   
  const theme=useContext(themeContext);
  return <>{theme}</>
  
}

export default App

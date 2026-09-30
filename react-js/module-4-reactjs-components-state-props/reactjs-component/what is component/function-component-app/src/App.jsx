import React from 'react'
function App(props)
{
  return (
    <div className="App">
      <h1>React Vite Template</h1>
      <p>This is a simple React template using Vite.</p>
      <p>My name is :{props.name}</p>
    </div>
  )
}

export default App
import React,{Component} from 'react'
class App extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>Welcome to React</h1>
        <p>This is a simple React class based component</p>
       <h3>My name is :{this.props.name}</h3> 
      </div>
    )
  }
}

export default App
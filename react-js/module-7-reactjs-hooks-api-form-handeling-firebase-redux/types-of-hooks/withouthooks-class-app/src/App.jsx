// import React,{Component} from 'react'
import React,{Component} from 'react'
// before react 16.8 version if we used create a counter app without using hooks then we can create a class based components
// class App extends Component meanse inheritance
class App extends Component
{
  // create a counter app 
  state={
    count:0,
  }
  // create a function 
  increment=()=>{
    this.setState({
      count:this.state.count + 1,
    })
  }

   decrement=()=>{
    this.setState({
      count:this.state.count - 1,
    })
  }

  reset=()=>{
    this.setState({
      count:0,
    })
  }
  render(){
    return(
      <>
       <div className='app'>
       <h1>{this.state.count}</h1>
       <button type='button' onClick={this.increment}>+</button>
        <button type='button' onClick={this.decrement}>-</button>
         <button type='button' onClick={this.reset}>Reset</button>
      </div>
      </>
    )
  }
}

export default App
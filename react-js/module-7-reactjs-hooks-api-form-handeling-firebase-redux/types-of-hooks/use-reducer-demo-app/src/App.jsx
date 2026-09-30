import React,{useReducer} from "react";
// useReducer is a type of hooks 
// useReducer is a generalized function 
// useReducer it also used to access state data 
// useReducer is also used to handel a complex Logic data or complex state full logic

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count:
          state.count + 1
      };

      case "decrement":
      return {
        count:
          state.count - 1
      };

      case "reset":
      return {
        count:0
          
      };

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] =
    useReducer(reducer, {
      count: 0
    });

  return (
    <>
     <h3>{state.count}</h3>
    
      <button className="btn"
      onClick={() =>
        dispatch({
          type: "increment"
        })
      }
    >
      +
    </button>

    
    
      <button className="btn"
      onClick={() =>
        dispatch({
          type: "decrement"
        })
      }
    >
    Decrement
    </button>

      <button className="btn"
      onClick={() =>
        dispatch({
          type: "reset"
        })
      }
    >
    Reset
    </button>




    </>
  );
}

export default App
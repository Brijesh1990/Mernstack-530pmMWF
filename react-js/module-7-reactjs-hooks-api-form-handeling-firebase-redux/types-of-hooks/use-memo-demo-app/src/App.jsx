import React,{useMemo} from 'react'
/*
useMemo :  Memoize values
           Memoize values meanse stored the values
           Memoizes the state values to one components to another components  

*/ 
export default function App({number=4}) {
  const square=useMemo(() => {
      return number * number;
    }, [number])

    return <h1>{square}</h1>; 
  
}

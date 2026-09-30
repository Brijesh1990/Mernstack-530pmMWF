# what is props in React js

  1. props stands for properties in react js 
  2. props are passed in function as arguments or parameter and access in html or jsx as attributes 
  3. props is immutable can not be changed 
  4. props are used to read data
  5. props are passed and used data one components to another components to parent to child
  6. props access html or jsx data as attributes 

    ```
     function App(props)
     {
        return (
            <>
               <h1>{props.name}</h1>
            </>
        )
     }
     export default App
    ```


# what is destructuring in  props  ?
  1. destructuring is used to access multiple properties pass as an object inside of functions 
  2. destructuring access all properties inside of objects {name,age}

   ```
     function App({name,age})
     {
        return (
            <>
               <h1>{name}</h1>
               <h2>{age}</h2>
            </>
        )
     }
     export default App
    ```


# what is destructuring or drilling  in  props  ?
  1. destructuring is used to access multiple properties pass as an object inside of functions 
  2. destructuring access all properties inside of objects {name,age}

   ```
     function App({name,age})
     {
        return (
            <>
               <h1>{name}</h1>
               <h2>{age}</h2>
            </>
        )
     }
     export default App
    ```


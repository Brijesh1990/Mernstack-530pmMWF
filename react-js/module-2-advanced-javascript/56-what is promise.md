# what is promise in javascript ?
  A promise in javascript is an object 
  A promise is asynchrounous 
  A promise give either success or failure 

## types of operation in promise 

   | state   |    Meaning            |
   |---------|-----------------------|
   |pending  | operation is running  |
   |fullfilled  | operation is completed successfully  |
   |rejected  | operation is failed   |

# syntax of promise 
  **examples**
  ```
  let promise=new Promise(resolve, reject) =>{

     let success=true;

     if(success)
     {
      resolve('Operation successfully resolved')
     }
     else 
     {
      reject("Operation failed")
     }

  }
  ```


## Promise.all() 
   This method is used to runs multiple promise parellel

   **examples**

   ```
    <script>
    let o1=Promise.resolve(10);
    let o2=Promise.resolve(20);
    let o3=Promise.resolve(30);
    Promise.all([o1,o2,o3]).then((values)=>{
        console.log(values)
    })

    </script>
   ```

## what can promise do in javascript 

   1. fetch api data
   2. axios 
   3. database calls 
   4. Authentication 
   5. file uploads 
   6. payment gateways 


## Async & await in javascript using promise

   **what is async**
   1. Async default method to performed any object in promise
   2. used async before a function
   3. makes the function always return a Promise 
    
   **examples**

   ```
   <script>
   async function test()
   {
    return "My name is Brijesh";
   } 
  console.log(test())
   </script>
   ```
  **what is await**
   1. await is used inside of async function 
   2. pasuses execution until the promise resolved
   3. makes async code look like synchronous code  
   4. await always works inside of async function 
   5. it is only pauses that function not block broswers 

   **examples** 
   ```
   ```
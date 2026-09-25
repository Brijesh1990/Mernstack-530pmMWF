# what is exceptional handeling in javascript ? 

  ## definition :
  **definition**: A exceptional handeling is used to handel exception or error in javascript there used exceptional handeling

  **syntax**

  ```
 
 try 
 {
  statements;
 }
 catch(err)
 {
  statements;
 }
  ```


**examples**
```
 try 
 {
  let a=10;
  let b=30;
  let c=a+bb;
  console.log("additions of numbers is :",c)
 }
 catch(err)
 {
  
  console.log("Generates errors here :",err.message)
 }
 
```

## why used Exception handeling is needed

1. prevent application crashes
2. handel unexpected user input
3. debug error easily 
4. improve user experience


## what is try .. catch ..finally 

**try..catch..finally**
the finally block always executes wether an error occurs or not 
**examples**
```
try 
{
let result=10/0;
console.log(result1);
}
catch(err)
{
console.log('Error generated',err.message)
}
finally 
{
console.log('Execution is completed')
} 
```
# what is form handeling ?

  1. form handeling is used to handel form in put data via state and stored that data or save that date or print that data via form i.e called form handeling. 

  2. form handeling is used to take a input from user and print dynamic that informations. 


 **types of form handeling in react js**

 1. controlled components
 
    1. controlled components handel data and stored data via useState() hooks
    2. values binds input via state
    3. state is mutable 
    4. onchange() updates the state
    5. React js is used controlled components almost to form handeling
   
    **examples**


    ```
    import React,{useState} from 'react'

    //create a function 
    function myFunction()
    {
        //destructuring of state 
        const[data,setData]=useState({
            name:"",
            email:""
        });

        //create a form handelChange

        const handelChangeForm=(e)=>{

          //prevent the form from refresh 
          e.preventDefault();
          const {name , values} =e.target;
          //update the input data 
          setData({
            ...data,
            [name]:values
          })

        }

        //create a form handeling Data 

        const addFormData=(e)=>{
            e.preventDefault();
            console.log(data)
        }

    

    return(
        <>
          <form onSubmit={addFormData}>
             name : <input type="text" name="name" value={data.name} onChange={handelChangeForm} />
             <br/><br/>
            email : <input type="text" name="email"  value={data.email} onChange={handelChangeForm} />
          </form>        
        </>
    )

    } 


    ```      


 2. uncontrolled components   
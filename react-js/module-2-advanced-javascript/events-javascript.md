# what is events in javascript ? 
``` events of javascript
    events in javascript performed some actions
    events are used to completed any task i.e 
    examples :onclick | ondblclick | onchange | onblur etc 
```

# # list of types of vents in javascript 

1. form events 
   examples : onchange | onsubmit | onblur 
2. keyboard events 
   examples: onkeypress | onkeyup | onkeydown
3. window events
   example: onload | onunload
4. mouse events 
   example: onclick | ondblclick | onmouseover | onmouseout   

   ```examples of events in javascript 
 
       onchange events 
         
       function updatePrice()
       {
       var price=document.getElementById("price").value;
       var qty=document.getElementById("qty").value;
       var sub=price*qty;
       document.getElementById("subtotal").innerHTML=sub;

       }



      onblur events 

        function changecase()
        {
            document.getElementById("username").value = document.getElementById("username").value.toUpperCase();

            document.getElementById("fullname").value = document.getElementById("fullname").value.toUpperCase();
            
            document.getElementById("email").value = document.getElementById("email").value.toUpperCase();
        }



   ```            
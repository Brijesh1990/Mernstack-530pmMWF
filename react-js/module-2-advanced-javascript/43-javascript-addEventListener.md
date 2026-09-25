# what is javascript addEventListener 
 **definition**
 1. javascript addEventListener used as event 
 2. javascript addEventListener is used as callback
 3. javascript addEventListener is used in ES6 and ES7 (advanced javascript)

 examples : 

 ```
<body>
<p id="demo">Brijesh</p>
<button type="button" id="btn">click Me</button>
<script>
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    document.getElementById("demo").style="color:red; font-size:45px";
})
</script>
</body>
 ```
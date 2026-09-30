// admin login
function login()
{
 var username=document.getElementById("username").value;
 var password=document.getElementById("password").value;   
 if(username=='superadmin007' && password=='admin$$1234')
 {
 window.location='dashboard.html'; 
 }
 else 
 {
 Swal.fire({
  title: "Oops!",
  text: "Your username and password are wrong try again",
  icon: "error"
  });
//  window.location='index.html'; 

 }


}
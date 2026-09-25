var frm=document.getElementById("frm");
frm.addEventListener("submit",function(e){
// stop redirect 
e.preventDefault();
// validation here
if(document.frm.name.value=="")
{
alert('PLease enter your name ')
document.frm.name.focus();
return false;
}
// R.E for character only 
var nm=/^[a-zA-Z]+$/;
if(!nm.test(document.frm.name.value))
{
alert('PLease enter your name only alphabetic characters ')
document.frm.name.focus();
return false;
}

if(document.frm.email.value=="")
{
alert('PLease enter your email')
document.frm.email.focus();
return false;
}

// apply regular express for checking valid email address

var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(!em.test(document.frm.email.value))
{
alert('PLease enter your valid email')
document.frm.email.focus();
return false;
}

if(document.frm.phone.value=="")
{
alert('PLease enter your phone')
document.frm.phone.focus();
return false;
}

var ph=/^\d{10}$/;

if(!ph.test(document.frm.phone.value))
{
alert('PLease enter your phone number minimum 10 and max 10 in digit')
document.frm.phone.focus();
return false;
}

if(document.frm.address.value=="")
{
alert('PLease enter your address')
document.frm.address.focus();
return false;
}
// if validation passes, submit manually
frm.submit();
})
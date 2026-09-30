import React from "react";
// create a multiple function 
function Add()
{
  const a=prompt('Enter a values :');
  const b=prompt('Enter b values :');
  const c=a+b;
  
  alert('THe additions of numbers is :'+c)
}
function subs()
{
  const a=parseInt(prompt('Enter a values :'));
  const b=parseInt(prompt('Enter b values :'));
  const c=a-b;
  
  alert('THe Substractions of numbers is :'+c)
}
function Mult()
{
  const a=parseInt(prompt('Enter a values :'));
  const b=parseInt(prompt('Enter b values :'));
  const c=a*b;
  alert('THe Multi of numbers is :'+c)
}
function DV()
{
  const a=parseInt(prompt('Enter a values :'));
  const b=parseInt(prompt('Enter b values :'));
  const c=a/b;
  alert('THe divisions of numbers is :'+c)
}
export {Add,subs,Mult,DV}

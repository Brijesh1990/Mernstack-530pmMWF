# what is oops in javascript ?
1. oops stands for object oriented programming structured language
2. oops is used inside of javascript for react js class based components 
3. oops provides securities
4. oops is object based language
5. oops used to access parent class properties via its child class using inheritance.
6. oops provides some features
7. oops partial support javascript 


## oops features in javascript ?

1. class 
2. object 
3. inheritance 
4. polymorphism 
5. encapsulation 
6. abstraction

**what is class**

A class is a group of its member and member function
or
A class is nothing whenever we create its object 
or 
A class is a blueprint of any object.

Note : an object is always created by new keyword

**syntax**
```
class classname
{
member function()
{
    statements;
}
}
create an object of class 
``` 

**examples of class**

```
class A 
{
constructor(name,age)
{
    this.name=name;
    this.age=age;
}
}

<!-- create an object -->

var obj=new A("brijesh",35);
console.log(obj);

```


**what is object**

An object instance of class i.e called object.

Note : an object is always created by new keyword

**syntax**
```
class classname
{
member function()
{
    statements;
}
}
create an object of class 
var obj=new classname

``` 

**examples of class**

```
class A 
{
constructor(name,age)
{
    this.name=name;
    this.age=age;
}
}

<!-- create an object -->

var obj=new A("brijesh",35);
console.log(obj);

```

**what is constructor in javascript**

A constructor is a same name of class when we create an object of class constructor automatically called.


```
class A 
{
constructor(name,age)
{
    this.name=name;
    this.age=age;
}
}

<!-- create an object -->
var obj=new A("brijesh",35);
console.log(obj);

```

**what is inheritance in javascript**
An inheritance is used to access parent class properties via its child class that is called inheritance.

**types of inheritance**
1. single inheritance 
2. multilevel inheritance
3.  multiple inheritance (not supported in javascript)

**syntax**

```
class A 
{
constructor(name,age)
{
    statements;
}
}
class B extends A 
{
constructor(name,age,department,salary)
{
    super(); //that can be access all the properties of class A 
    statements;
}
}

call the object
var obj=new B()

``` 



**examples of single inheritance**
**A=>B**
```
<script>
class A 
{
constructor(name,age)
{
this.name=name;
this.age=age;
}
}
class B extends A 
{

constructor(name,age,department,salary)
{
super(name,age); //that can be access all the properties of class A 
this.department=department;
this.salary=salary;
}
}

//call the object
var obj=new B("krish",35,"CSE",115000);
console.log(obj);
// note : a parent class prperties used by its child class via extends keyword
</script>
```
**examples of multilevel inheritance**
**A=>B=>C=>D**
```
<script>
class A 
{
constructor(name,age)
{
this.name=name;
this.age=age;
}
}
class B extends A 
{

constructor(name,age,department,salary)
{
super(name,age); //that can be access all the properties of class A 
this.department=department;
this.salary=salary;
}
}

class C extends B 
{

constructor(name,age,department,salary,address)
{
super(name,age,department,salary); //that can be access all the properties of class A 
this.address=address;

}
}
//call the object
var obj=new C("krish",35,"CSE",115000,"150 feet ring road rajkot");
console.log(obj);
// note : a parent class properties used by its child class via extends keyword
</script>
```

**what is super() method do in javascript ?**

super is an method that can be access parent class properties via its child class we can not access without super();

```
<script>
class A 
{
constructor(name,age)
{
this.name=name;
this.age=age;
}
}
class B extends A 
{
constructor(name,age,department,salary)
{
super(name,age); //that can be access all the properties of class A 
this.department=department;
this.salary=salary;
}
}
//call the object
var obj=new B("krish",35,"CSE",115000);
console.log(obj);

// note : a parent class prperties used by its child class via extends keyword
</script>
```

**what is polymorphism in javascript**
## definition : 
A polymorphism is used to many form to design one application using different-2 function there we used polymorphism.

**types of polymorphism**

1. method overloading 
2. method overriding   
    
**method overloading**
A method overloading used same function pass with different arguments there we used method overloading.

```
<script>
class A 
{
constructor(a,b)
{
    this.a=a;
    this.b=b;
    
}
}    
class B extends A 
{
constructor(a,b,c)
{
    super(a,b) 
    this.c=c;
    c=a+b;
}
}

var obj=new B(15,10,c);
console.log(obj);
</script>
```
**method overriding**
A method overriding used same function pass with same arguments there we used method overriding.      

```
<script>
class A 
{
constructor(a,b)
{
    this.a=a;
    this.b=b;
    
}
}    
class B extends A 
{
constructor(a,b)
{
    super(a,b) 
}
}

var obj=new B(15,10);
console.log(obj);
</script>

```

## abstraction : 
**Abstraction**
An abstraction is a data hiding process where our data will be hide from some enternal users.

we never create an object of abstract class 

```
<script>
abstract class A 
{
constructor(a,b)
{
    this.a=a;
    this.b=b;
    
}
}    
class B extends A 
{
constructor(a,b)
{
    super(a,b) 
}
}

var obj=new B(15,10);
console.log(obj);
</script>
``` 


## encapsulation 

An encapsulation is a process where an object is wrapping up one data there we used encapsulation.

or

An encapsulation is a process where all method wrapping up in one objects there we used encapsulation.




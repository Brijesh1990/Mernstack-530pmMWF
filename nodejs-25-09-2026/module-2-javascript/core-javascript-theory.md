# Core JavaScript Concepts - Complete Guide

## 1. What is JavaScript?
**Definition:** A lightweight, interpreted programming language designed to run in browsers and add interactivity to web pages.

**Example:**
```javascript
console.log("Hello, JavaScript!");
```

---

## 2. Variables

### `var`
Declares a function-scoped or globally-scoped variable. Can be redeclared and updated.

**Example:**
```javascript
var name = "John";
var name = "Jane"; // Can be redeclared
name = "Bob"; // Can be updated
console.log(name); // Bob
```

### `let`
Declares a block-scoped variable. Cannot be redeclared in the same scope but can be updated.

**Example:**
```javascript
let age = 25;
age = 26; // Can be updated
// let age = 27; // Error: Cannot redeclare
{
  let age = 30; // Different scope
  console.log(age); // 30
}
console.log(age); // 26
```

### `const`
Declares a constant block-scoped variable. Cannot be redeclared or updated.

**Example:**
```javascript
const PI = 3.14;
// PI = 3.15; // Error: Cannot update
// const PI = 3.1; // Error: Cannot redeclare
```

---

## 3. Data Types

### Primitive Data Types

#### **Number**
Represents numeric values (integers and decimals).

**Example:**
```javascript
let count = 42;
let price = 19.99;
console.log(typeof count); // number
```

#### **String**
Represents text enclosed in quotes (' ', " ", or backticks).

**Example:**
```javascript
let message = "Hello World";
let name = 'John';
let template = `Welcome, ${name}`; // Template literal
```

#### **Boolean**
Represents true or false values.

**Example:**
```javascript
let isActive = true;
let isCompleted = false;
console.log(isActive); // true
```

#### **Null**
Represents intentional absence of value.

**Example:**
```javascript
let user = null; // Intentional empty
```

#### **Undefined**
Represents uninitialized variables or missing function returns.

**Example:**
```javascript
let x;
console.log(x); // undefined
function test() {} 
console.log(test()); // undefined
```

#### **Symbol**
Represents unique, immutable identifiers.

**Example:**
```javascript
const id = Symbol("userId");
const id2 = Symbol("userId");
console.log(id === id2); // false (unique)
```

#### **BigInt**
Represents large integers beyond Number limit.

**Example:**
```javascript
const largeNum = 9007199254740991n;
console.log(typeof largeNum); // bigint
```

### Complex Data Types

#### **Object**
Collection of key-value pairs.

**Example:**
```javascript
const user = {
  name: "John",
  age: 30,
  isActive: true
};
console.log(user.name); // John
```

#### **Array**
Ordered collection of values.

**Example:**
```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3
```

---

## 4. Operators

### Arithmetic Operators
```javascript
let a = 10, b = 3;
console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7 (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.33 (Division)
console.log(a % b);  // 1 (Modulus)
console.log(a ** 2); // 100 (Exponentiation)
```

### Assignment Operators
```javascript
let x = 5;
x += 3;  // x = 8
x -= 2;  // x = 6
x *= 2;  // x = 12
x /= 3;  // x = 4
```

### Comparison Operators
```javascript
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false
```

### Logical Operators
```javascript
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)
```

---

## 5. Functions

**Definition:** Reusable block of code that performs a specific task.

### Regular Function
```javascript
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("John")); // Hello, John
```

### Arrow Function (ES6)
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
```

### Anonymous Function
```javascript
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20
```

---

## 6. Conditionals

### if...else
```javascript
let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### if...else if...else
```javascript
let score = 75;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

### switch Statement
```javascript
let day = "Monday";
switch(day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("End of week");
    break;
  default:
    console.log("Midweek");
}
```

### Ternary Operator
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult
```

---

## 7. Loops

### for Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### while Loop
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### do...while Loop
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### for...in Loop
```javascript
const user = { name: "John", age: 30 };
for (let key in user) {
  console.log(key, user[key]);
}
```

### for...of Loop
```javascript
const fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## 8. Scope

**Definition:** The region where a variable is accessible.

### Global Scope
```javascript
let globalVar = "I'm global";
function test() {
  console.log(globalVar); // Accessible
}
```

### Function Scope
```javascript
function test() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible inside function
}
// console.log(localVar); // Error: Not accessible outside
```

### Block Scope
```javascript
{
  let blockVar = "Block scope";
  console.log(blockVar); // Accessible
}
// console.log(blockVar); // Error: Not accessible outside
```

---

## 9. Hoisting

**Definition:** Moving declarations to the top during compilation.

### var Hoisting
```javascript
console.log(x); // undefined (hoisted but not initialized)
var x = 5;
console.log(x); // 5
```

### let/const Hoisting
```javascript
// console.log(y); // Error: Cannot access before initialization
let y = 5;
```

---

## 10. Closures

**Definition:** Function that remembers variables from its parent scope.

**Example:**
```javascript
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

## 11. typeof Operator

Returns the data type of a variable.

**Example:**
```javascript
console.log(typeof 42);        // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (quirk)
console.log(typeof {});        // object
console.log(typeof []);        // object
```

---

## 12. Strict Mode

**Definition:** Enforces strict parsing and error handling.

**Example:**
```javascript
"use strict";
x = 5; // Error: x is not defined
```

---

## 13. String Methods

```javascript
const str = "JavaScript";
console.log(str.length);           // 10
console.log(str.toUpperCase());    // JAVASCRIPT
console.log(str.toLowerCase());    // javascript
console.log(str.charAt(0));        // J
console.log(str.slice(0, 4));      // Java
console.log(str.includes("Script")); // true
console.log(str.split(""));        // Array of characters
```

---

## 14. Array Methods

```javascript
const arr = [1, 2, 3, 4, 5];

// Adding elements
arr.push(6);              // [1, 2, 3, 4, 5, 6]
arr.unshift(0);           // [0, 1, 2, 3, 4, 5, 6]

// Removing elements
arr.pop();                // Removes last
arr.shift();              // Removes first

// Iteration
arr.forEach(item => console.log(item));
arr.map(item => item * 2);           // [2, 4, 6, 8, 10]
arr.filter(item => item > 2);        // [3, 4, 5]
arr.reduce((sum, item) => sum + item, 0); // 15

// Finding
arr.find(item => item === 3);        // 3
arr.indexOf(3);                      // 2
arr.includes(3);                     // true
```

---

## 15. Object Methods

```javascript
const user = { name: "John", age: 30 };

// Get keys and values
Object.keys(user);      // ["name", "age"]
Object.values(user);    // ["John", 30]
Object.entries(user);   // [["name", "John"], ["age", 30]]

// Clone
const copy = Object.assign({}, user);
const spread = { ...user };

// Freeze
Object.freeze(user);    // Cannot modify
```

---

## 16. this Keyword

**Definition:** Refers to the object that owns the function.

**Example:**
```javascript
const user = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
user.greet(); // Hello, John
```

---

## 17. Error Handling

### try...catch...finally
```javascript
try {
  riskyFunction();
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Always runs");
}
```

### throw
```javascript
function validate(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
}
```

---

## 18. Destructuring

### Array Destructuring
```javascript
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
```

### Object Destructuring
```javascript
const { name, age } = { name: "John", age: 30 };
console.log(name); // John
```

---

## 19. Spread Operator (...)

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

---

## 20. Template Literals

```javascript
const name = "John";
const age = 30;
const message = `Hello, ${name}! You are ${age} years old.`;
console.log(message);
```

---

## 21. Callbacks

**Definition:** Function passed as argument to another function.

**Example:**
```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
greet("John", function() {
  console.log("Callback executed!");
});
```

---

## 22. Promises

**Definition:** Object representing eventual completion/failure of async operation.

**Example:**
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result));
```

---

## 23. async/await

**Definition:** Syntactic sugar for working with Promises.

**Example:**
```javascript
async function fetchData() {
  try {
    const response = await fetch("url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

---

## 24. Classes

**Definition:** Blueprint for creating objects with properties and methods.

**Example:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
const person = new Person("John", 30);
console.log(person.greet());
```

---

## 25. Inheritance

```javascript
class Animal {
  speak() {
    console.log("Some sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}
const dog = new Dog();
dog.speak(); // Woof!
```

---

## 26. JSON

**Definition:** JavaScript Object Notation for data exchange.

**Example:**
```javascript
const obj = { name: "John", age: 30 };
const json = JSON.stringify(obj); // "{\"name\":\"John\",\"age\":30}"
const parsed = JSON.parse(json);   // { name: "John", age: 30 }
```

---

## 27. Regular Expressions

**Definition:** Pattern for matching and manipulating text.

**Example:**
```javascript
const pattern = /hello/i; // Case-insensitive
console.log(pattern.test("Hello World")); // true
const result = "Hello World".match(/hello/i); // ["Hello"]
```

---

## 28. this Binding & call, apply, bind

```javascript
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
const user = { name: "John" };

greet.call(user, "Hello");        // Hello, John
greet.apply(user, ["Hi"]);        // Hi, John
const boundGreet = greet.bind(user, "Hey");
boundGreet();                      // Hey, John
```

---

## Quick Reference Summary

| Concept | Purpose |
|---------|---------|
| **var/let/const** | Declare variables |
| **Data Types** | Store different types of values |
| **Operators** | Perform operations |
| **Functions** | Reusable code blocks |
| **Conditionals** | Execute code conditionally |
| **Loops** | Repeat code |
| **Scope** | Variable accessibility |
| **Closures** | Remember parent scope |
| **Arrays** | Store multiple values |
| **Objects** | Store key-value pairs |
| **Error Handling** | Handle exceptions |
| **Promises** | Handle async operations |
| **Classes** | Create objects with blueprints |


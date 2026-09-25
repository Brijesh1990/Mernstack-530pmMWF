# JavaScript Hoisting

## What is Hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. This means variables and functions are partially or fully moved to the top of their scope during the compilation phase, before the code is executed.

---

## 1. Function Hoisting

### 1.1 Function Declaration (Fully Hoisted)

Function declarations are completely hoisted, so you can call them before they're declared:

```javascript
// Calling function before declaration
sayHello();  // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

**What happens internally:**
```javascript
// JavaScript interprets it as:
function sayHello() {
  console.log("Hello!");
}

sayHello();  // Output: "Hello!"
```

### 1.2 Function Expression (NOT Hoisted)

Function expressions are not hoisted. Only the variable is hoisted as `undefined`:

```javascript
sayBye();  // Error: sayBye is not a function

var sayBye = function() {
  console.log("Bye!");
};
```

**What happens internally:**
```javascript
// JavaScript interprets it as:
var sayBye = undefined;

sayBye();  // Error: sayBye is not a function

sayBye = function() {
  console.log("Bye!");
};
```

### 1.3 Arrow Function (NOT Hoisted)

Arrow functions are not hoisted:

```javascript
greet();  // Error: greet is not a function

const greet = () => {
  console.log("Greetings!");
};
```

---

## 2. Variable Hoisting

### 2.1 `var` Hoisting

Variables declared with `var` are hoisted and initialized with `undefined`:

```javascript
console.log(x);  // Output: undefined
var x = 5;
console.log(x);  // Output: 5
```

**What happens internally:**
```javascript
// JavaScript interprets it as:
var x = undefined;

console.log(x);  // Output: undefined
x = 5;
console.log(x);  // Output: 5
```

**Example with function scope:**
```javascript
function demo() {
  console.log(a);  // Output: undefined
  var a = 10;
  console.log(a);  // Output: 10
}
demo();
```

### 2.2 `let` Hoisting (Temporal Dead Zone)

Variables declared with `let` are hoisted but not initialized. They stay in a "Temporal Dead Zone" (TDZ) until the declaration is reached:

```javascript
console.log(y);  // ReferenceError: Cannot access 'y' before initialization

let y = 5;
```

**What happens internally:**
```javascript
// y is hoisted but stays in TDZ
// console.log(y);  // Error!

let y = 5;
console.log(y);  // Output: 5
```

**Example - TDZ scope:**
```javascript
{
  // Temporal Dead Zone for x
  console.log(x);  // ReferenceError
  let x = 10;
  console.log(x);  // Output: 10
}
```

### 2.3 `const` Hoisting (Temporal Dead Zone)

Variables declared with `const` are hoisted but not initialized (similar to `let`):

```javascript
console.log(z);  // ReferenceError: Cannot access 'z' before initialization

const z = 5;
```

**Example:**
```javascript
function test() {
  console.log(PI);  // ReferenceError
  const PI = 3.14;
  console.log(PI);  // Output: 3.14
}
test();
```

---

## 3. Class Hoisting

Classes are hoisted but not initialized (similar to `let` and `const`). They stay in TDZ:

```javascript
const obj = new MyClass();  // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    this.name = "Class";
  }
}
```

**Correct usage:**
```javascript
class MyClass {
  constructor() {
    this.name = "Class";
  }
}

const obj = new MyClass();  // Works fine
console.log(obj.name);  // Output: "Class"
```

---

## 4. Real-World Hoisting Issues

### 4.1 Problem with `var` in Loops

```javascript
// Problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  // Output: 3, 3, 3 (not 0, 1, 2)
  }, 1000);
}
```

**Why:** The variable `i` is hoisted to function scope, not block scope.

**Solution 1: Use `let`**
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);  // Output: 0, 1, 2 (correct!)
  }, 1000);
}
```

**Solution 2: Use IIFE (Immediately Invoked Function Expression)**
```javascript
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j);  // Output: 0, 1, 2
    }, 1000);
  })(i);
}
```

### 4.2 Using Variables Before Declaration

```javascript
console.log(name);  // Output: undefined
var name = "John";
console.log(name);  // Output: "John"
```

### 4.3 Hoisting with Multiple Declarations

```javascript
console.log(a);  // Output: undefined
var a = 1;
console.log(a);  // Output: 1
var a = 2;
console.log(a);  // Output: 2
```

---

## 5. Function vs Variable Hoisting Priority

Function declarations are hoisted before variable declarations:

```javascript
console.log(typeof foo);  // Output: "function"

var foo = "I am a variable";

function foo() {
  return "I am a function";
}
```

**What happens internally:**
```javascript
// Functions are hoisted first
function foo() {
  return "I am a function";
}

// Then variables (but foo already exists)
// var foo;  // This is ignored

console.log(typeof foo);  // Output: "function"

foo = "I am a variable";
```

---

## 6. Hoisting with Multiple Variables

```javascript
console.log(x);  // Output: undefined
console.log(y);  // Output: undefined
console.log(z);  // Output: undefined

var x = 1, y = 2, z = 3;

console.log(x, y, z);  // Output: 1 2 3
```

**What happens internally:**
```javascript
var x = undefined;
var y = undefined;
var z = undefined;

console.log(x);  // Output: undefined
console.log(y);  // Output: undefined
console.log(z);  // Output: undefined

x = 1;
y = 2;
z = 3;
```

---

## 7. Hoisting with Global Scope

```javascript
// Global scope
console.log(globalVar);  // Output: undefined

function myFunc() {
  console.log(globalVar);  // Output: undefined
  var globalVar = 100;
  console.log(globalVar);  // Output: 100
}

myFunc();
console.log(globalVar);  // Output: undefined (different variable)
```

---

## 8. Summary Table

| Declaration | Hoisted? | Initialized? | Scope | TDZ? |
|------------|----------|--------------|-------|------|
| `function` | Yes | Yes (function) | Function | No |
| `var` | Yes | Yes (undefined) | Function | No |
| `let` | Yes | No | Block | Yes |
| `const` | Yes | No | Block | Yes |
| `class` | Yes | No | Block | Yes |

---

## 9. Best Practices

✅ **DO:**
- Use `let` and `const` instead of `var`
- Declare variables at the top of their scope
- Declare functions before using them
- Use function declarations instead of expressions when possible

❌ **DON'T:**
- Rely on hoisting to use variables before declaration
- Use `var` in loops
- Assume function expressions are hoisted
- Use variables in the Temporal Dead Zone

---

## 10. Key Takeaways

1. **Hoisting** moves declarations to the top of their scope during compilation
2. **Function declarations** are fully hoisted and can be called before declaration
3. **Function expressions** and **arrow functions** are NOT hoisted
4. **`var`** is hoisted and initialized as `undefined`
5. **`let` and `const`** are hoisted but NOT initialized (Temporal Dead Zone)
6. **Classes** behave like `let` and `const` (TDZ)
7. Use `let` and `const` to avoid hoisting confusion

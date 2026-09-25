# JavaScript Error Definition and Types

## What is a JavaScript Error?

A **JavaScript Error** is an event that occurs when something goes wrong with the JavaScript code during execution. Errors prevent the code from running properly and may cause the program to crash or behave unexpectedly. JavaScript provides error objects and error handling mechanisms to help developers identify, handle, and fix these issues.

### Key Characteristics of Errors:
- **Break Code Execution**: Errors can stop the execution of code
- **Provide Information**: Errors contain messages that describe what went wrong
- **Stack Trace**: Errors include information about where they occurred in the code
- **Catchable**: Most errors can be caught and handled using try-catch blocks

---

## Types of Errors in JavaScript

### 1. **SyntaxError**
Occurs when there is a syntax mistake in the code that prevents it from being parsed correctly.

**Common Causes:**
- Missing or mismatched braces, brackets, or parentheses
- Invalid variable names
- Incorrect keywords usage
- Missing semicolons (in strict mode)

**Example:**
```javascript
// Missing closing parenthesis
console.log("Hello";

// Invalid variable name
var 123invalid = "value";

// Unexpected token
var x = y z;
```

---

### 2. **ReferenceError**
Occurs when trying to reference a variable or function that doesn't exist or is out of scope.

**Common Causes:**
- Using undefined variables
- Misspelling variable names
- Using variables before they are declared (in strict mode)
- Accessing outer scope variables from wrong context

**Example:**
```javascript
console.log(undefinedVar); // ReferenceError: undefinedVar is not defined

function test() {
  console.log(localVar); // ReferenceError if localVar not declared
}

// Misspelled variable
var myVariable = 10;
console.log(myVarable); // ReferenceError
```

---

### 3. **TypeError**
Occurs when a value is not of the expected type or when performing invalid operations on a value.

**Common Causes:**
- Calling a non-function as a function
- Accessing properties of null or undefined
- Performing invalid operations on incompatible types
- Trying to modify read-only properties

**Example:**
```javascript
var x = null;
console.log(x.property); // TypeError: Cannot read property 'property' of null

var y = "string";
y.toUpperCase(); // Works fine
y.forEach(); // TypeError: y.forEach is not a function

var z = 5;
z(); // TypeError: z is not a function
```

---

### 4. **RangeError**
Occurs when a value is outside the acceptable range for a function or operation.

**Common Causes:**
- Array length too large
- Invalid array indices
- Invalid function parameter values
- Recursion depth exceeded (stack overflow)

**Example:**
```javascript
// Array length exceeded
var arr = new Array(-1); // RangeError: Invalid array length

// Invalid toFixed precision
var num = 5.5;
num.toFixed(101); // RangeError: toFixed() argument must be between 0 and 100

// Maximum recursion depth exceeded
function infinite() {
  infinite(); // RangeError: Maximum call stack size exceeded
}
```

---

### 5. **EvalError**
Occurs when the global `eval()` function is used improperly.

**Note:** This error is rarely thrown in modern JavaScript and is kept mainly for backward compatibility.

**Example:**
```javascript
// Historically used for eval() errors
// Rarely occurs in modern JavaScript
```

---

### 6. **URIError**
Occurs when global URI functions are given invalid arguments.

**Common Causes:**
- Using `decodeURI()` with invalid encoded URI
- Using `decodeURIComponent()` with malformed URI component
- Invalid characters in URI encoding/decoding

**Example:**
```javascript
decodeURIComponent('%'); // URIError: URI malformed

decodeURI('%EG'); // URIError: URI malformed
```

---

### 7. **InternalError**
Occurs when an internal error happens in the JavaScript engine (not standard, engine-specific).

**Common Causes:**
- Out of memory
- Regular expression too complex
- Engine-specific stack overflow

**Example:**
```javascript
// InternalError: too much recursion
// (behavior varies by browser/engine)
```

---

### 8. **Custom Errors**
User-defined errors created by throwing custom objects or Error instances.

**Example:**
```javascript
throw new Error("Custom error message");

throw {
  name: "CustomError",
  message: "Something went wrong"
};

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid input");
```

---

## Error Handling

### Try-Catch-Finally Block
```javascript
try {
  // Code that might throw an error
  riskyOperation();
} catch (error) {
  // Handle the error
  console.log("Error:", error.message);
} finally {
  // Code that always runs, regardless of error
  cleanup();
}
```

### Error Object Properties
- `name`: Type of error (e.g., "TypeError", "ReferenceError")
- `message`: Description of the error
- `stack`: Stack trace showing where error occurred

### Example:
```javascript
try {
  var x = null;
  console.log(x.property);
} catch (error) {
  console.log("Error Name:", error.name);      // TypeError
  console.log("Error Message:", error.message); // Cannot read property 'property' of null
  console.log("Stack:", error.stack);          // Full stack trace
}
```

---

## Summary Table

| Error Type | Cause | Example |
|-----------|-------|---------|
| **SyntaxError** | Invalid code syntax | Missing parenthesis, invalid variable name |
| **ReferenceError** | Undefined variable/function | Using undeclared variable |
| **TypeError** | Wrong data type or invalid operation | Calling non-function, accessing property of null |
| **RangeError** | Value outside acceptable range | Invalid array length, recursion overflow |
| **EvalError** | Improper use of eval() | Rarely used in modern JavaScript |
| **URIError** | Invalid URI function argument | Malformed URI in decode functions |
| **InternalError** | Engine-level error | Out of memory, stack overflow |
| **Custom Errors** | User-defined errors | Custom Error objects and classes |

---

## Best Practices for Error Handling

1. **Always use try-catch for risky operations**
   ```javascript
   try {
     JSON.parse(userInput);
   } catch (error) {
     console.log("Invalid JSON");
   }
   ```

2. **Provide meaningful error messages**
   ```javascript
   throw new Error("User not found with ID: " + userId);
   ```

3. **Handle specific errors differently**
   ```javascript
   try {
     // operation
   } catch (error) {
     if (error instanceof TypeError) {
       // handle type error
     } else if (error instanceof ReferenceError) {
       // handle reference error
     }
   }
   ```

4. **Use finally for cleanup**
   ```javascript
   try {
     openFile();
   } finally {
     closeFile(); // Always executes
   }
   ```

5. **Create custom error classes for domain-specific errors**
   ```javascript
   class DatabaseError extends Error {
     constructor(message) {
       super(message);
       this.name = "DatabaseError";
     }
   }
   ```

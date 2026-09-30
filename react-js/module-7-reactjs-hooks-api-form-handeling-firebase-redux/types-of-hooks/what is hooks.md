# React Hooks - Complete Guide

## Table of Contents

1. What are React Hooks?
2. Why Hooks Were Introduced
3. Advantages of Hooks
4. Rules of Hooks
5. Built-in React Hooks
6. Examples of Each Hook
7. Summary

---

# What are React Hooks?

React Hooks are special functions introduced in **React 16.8** that allow you to use React features like state, lifecycle methods, context, and refs inside **functional components**, without writing class components.

Before Hooks, state and lifecycle methods were only available in class components. Hooks made functional components simpler, more reusable, and easier to maintain.

---

## Without Hooks (Class Component)

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
```

---

## With Hooks (Functional Component)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}

export default Counter;
```

---

# Why Hooks?

Hooks were introduced to:

- Replace class components in most cases
- Reuse stateful logic
- Avoid complicated lifecycle methods
- Write cleaner code
- Improve readability
- Simplify testing

---

# Advantages of Hooks

## 1. Simpler Code

Hooks reduce boilerplate code.

```jsx
const [name, setName] = useState("");
```

Instead of

```jsx
this.state = {
  name: "",
};
```

---

## 2. No Class Components

No need for:

- constructor
- this keyword
- bind()
- lifecycle methods

Everything works inside a function.

---

## 3. Reusable Logic

Create reusable custom hooks.

```jsx
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () =>
    setCount(count + 1);

  return { count, increment };
}
```

Usage

```jsx
const { count, increment } =
  useCounter(0);
```

---

## 4. Easier State Management

```jsx
const [user, setUser] = useState({});
const [loading, setLoading] =useState(false);
const [error, setError] =useState("");
```

---

## 5. Better Code Organization

Everything related stays together.

```jsx
useEffect(() => {
  // Fetch Data

  return () => {
    // Cleanup
  };
}, []);
```

---

## 6. Easier Testing

Custom Hooks are JavaScript functions and can be tested independently.

---

## 7. Smaller Components

Instead of huge components, split logic into:

- useFetch()
- useAuth()
- useTheme()
- useCounter()

---

## 8. Better Readability

Related logic remains together instead of being scattered across lifecycle methods.

---

## 9. Performance Optimization

Hooks like

- useMemo
- useCallback

help avoid unnecessary calculations and re-renders.

---

## 10. Modern React Standard

Today almost every React project uses functional components with Hooks.

---

# Rules of Hooks

## Rule 1

Only call Hooks at the top level.

✅ Correct

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

❌ Wrong

```jsx
if (true) {
  useState(0);
}
```

---

## Rule 2

Only call Hooks inside

- Functional Components
- Custom Hooks

---

# Built-in React Hooks

| Hook | Purpose |
|------|---------|
| useState | Manage state |
| useEffect | Side effects |
| useContext | Access Context |
| useRef | DOM references |
| useReducer | Complex state management |
| useMemo | Memoize values |
| useCallback | Memoize functions |
| useLayoutEffect | Run before browser paint |
| useImperativeHandle | Customize ref |
| useDebugValue | Debug custom hooks |
| useId | Generate unique IDs |
| useTransition | Non-urgent updates |
| useDeferredValue | Delay updates |
| useSyncExternalStore | External store subscription |
| useInsertionEffect | Insert styles before layout |
| useOptimistic | Optimistic UI |
| useActionState | Form/action state |

---

# Hook Examples

---

# 1. useState

Used to store component state.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] =
    useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}
```

---

# 2. useEffect

Runs side effects.

```jsx
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

Cleanup

```jsx
useEffect(() => {

  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => clearInterval(timer);

}, []);
```

---

# 3. useContext

1. its used just like a useState
2. its is handel a complex logic statement managements 
3. useContext is handel the complex logic of data in react js 
4. useContext is used instead of useState
  

```jsx
import {
  createContext,
  useContext
} from "react";

const ThemeContext =createContext("light");

function App() {

  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {

  const theme =useContext(ThemeContext);

  return <h1>{theme}</h1>;
}
```

---

# 4. useRef

```jsx
import {
  useRef
} from "react";

function App() {

  const inputRef =
    useRef();

  return (
    <>
      <input ref={inputRef} />

      <button
        onClick={() =>
          inputRef.current.focus()
        }
      >
        Focus
      </button>
    </>
  );
}
```

---

# 5. useReducer

```jsx
import {
  useReducer
} from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count:
          state.count + 1
      };

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] =
    useReducer(reducer, {
      count: 0
    });

  return (
    <button
      onClick={() =>
        dispatch({
          type: "increment"
        })
      }
    >
      {state.count}
    </button>
  );
}
```

---

# 6. useMemo

```jsx
import {
  useMemo
} from "react";

function App({ number }) {

  const square =
    useMemo(() => {
      return number * number;
    }, [number]);

  return <h1>{square}</h1>;
}
```

---

# 7. useCallback

```jsx
import {
  useCallback
} from "react";

function App() {

  const handleClick =
    useCallback(() => {
      console.log("Clicked");
    }, []);

  return (
    <button
      onClick={handleClick}
    >
      Click
    </button>
  );
}
```

---

# 8. useLayoutEffect

```jsx
import {
  useLayoutEffect
} from "react";

function App() {

  useLayoutEffect(() => {
    console.log(
      "Runs before paint"
    );
  }, []);

  return <h1>Hello</h1>;
}
```

---

# 9. useImperativeHandle

```jsx
import {
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";

const Input = forwardRef(
  (props, ref) => {

    const inputRef =
      useRef();

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current.focus();
      }
    }));

    return (
      <input ref={inputRef} />
    );
  }
);
```

---

# 10. useDebugValue

```jsx
import {
  useDebugValue
} from "react";

function useOnlineStatus(status) {

  useDebugValue(
    status
      ? "Online"
      : "Offline"
  );

  return status;
}
```

---

# 11. useId

```jsx
import {
  useId
} from "react";

function App() {

  const id = useId();

  return (
    <>
      <label htmlFor={id}>
        Name
      </label>

      <input id={id} />
    </>
  );
}
```

---

# 12. useTransition

```jsx
import {
  useState,
  useTransition
} from "react";

function App() {

  const [text, setText] =
    useState("");

  const [
    isPending,
    startTransition
  ] = useTransition();

  function handleChange(e) {

    const value =
      e.target.value;

    setText(value);

    startTransition(() => {
      console.log(
        "Background update"
      );
    });
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />

      {isPending && (
        <p>Loading...</p>
      )}
    </>
  );
}
```

---

# 13. useDeferredValue

```jsx
import {
  useDeferredValue,
  useState
} from "react";

function App() {

  const [query, setQuery] =
    useState("");

  const deferredQuery =
    useDeferredValue(query);

  return (
    <>
      <input
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <p>
        {deferredQuery}
      </p>
    </>
  );
}
```

---

# 14. useSyncExternalStore

```jsx
import {
  useSyncExternalStore
} from "react";

function subscribe(callback) {

  window.addEventListener(
    "online",
    callback
  );

  window.addEventListener(
    "offline",
    callback
  );

  return () => {
    window.removeEventListener(
      "online",
      callback
    );

    window.removeEventListener(
      "offline",
      callback
    );
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function App() {

  const online =
    useSyncExternalStore(
      subscribe,
      getSnapshot
    );

  return (
    <h1>
      {online
        ? "Online"
        : "Offline"}
    </h1>
  );
}
```

---

# 15. useInsertionEffect

```jsx
import {
  useInsertionEffect
} from "react";

function App() {

  useInsertionEffect(() => {

    // Insert styles

  }, []);

  return <h1>Hello</h1>;
}
```

---

# 16. useOptimistic

```jsx
import {
  useOptimistic
} from "react";

function Comments() {

  const [
    comments,
    addComment
  ] = useOptimistic(
    [],
    (state, comment) => [
      ...state,
      comment
    ]
  );

  return (
    <button
      onClick={() =>
        addComment(
          "New Comment"
        )
      }
    >
      Add
    </button>
  );
}
```

---

# 17. useActionState

```jsx
import {
  useActionState
} from "react";

async function submit(
  prevState,
  formData
) {
  return {
    success: true
  };
}

function App() {

  const [
    state,
    formAction,
    pending
  ] = useActionState(
    submit,
    {
      success: false
    }
  );

  return (
    <form action={formAction}>

      <button
        disabled={pending}
      >
        Submit
      </button>

      {state.success && (
        <p>
          Submitted
        </p>
      )}

    </form>
  );
}
```

---

# Summary

| Hook             |         Purpose         |
|------------------|-------------------------|
| useState         |        Manage State     |
| useEffect        |        Side Effects     |
| useContext       |        Share Data       |
| useRef           |        DOM Reference    |
| useReducer       |        Complex State    |
| useMemo          |        Cache Values     |
| useCallback      |        Cache Functions  |
| useLayoutEffect  |        Before Paint     |
| useImperativeHandle |     Custom Ref       |
| useDebugValue    |        Debug Hook       |
| useId            |        Unique IDs       |
| useTransition    |        Background Updates |
| useDeferredValue |        Deferred Values  |
| useSyncExternalStore |    External Store   |
| useInsertionEffect |      CSS Injection    |
| useOptimistic    |        Optimistic UI    |
| useActionState   |        Form Actions     |

---

# Conclusion

React Hooks are the foundation of modern React development. They make components easier to write, maintain, test, and reuse. Master the core hooks (`useState`, `useEffect`, `useContext`, `useRef`, and `useReducer`) first, then move on to optimization and advanced hooks as your applications become more complex.
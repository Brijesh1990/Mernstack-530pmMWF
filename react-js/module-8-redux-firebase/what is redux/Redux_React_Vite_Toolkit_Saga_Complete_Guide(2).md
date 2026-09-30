# Redux in React JS with Vite — Complete Theory + Practical Guide

## 1. What is Redux?

**Redux** is a predictable state-management library used to manage application state in a centralized store.

In a small React application, `useState()` and `useContext()` may be enough. In a larger application, many components may need the same data. Redux provides a single, predictable place to store and update that shared state.

### Simple definition

> Redux is a centralized state management solution where the application state is stored in a single store and updated by dispatching actions through reducers.

### Why Redux?

Without Redux:

```text
Component A
   ↓
Props
   ↓
Component B
   ↓
Component C
```

As the application becomes large, passing props through many components can become difficult.

With Redux:

```text
             Redux Store
           /      |      \
          ↓       ↓       ↓
     Component A Component B Component C
```

Any component can subscribe to the required Redux state.

---

# 2. Redux Core Concepts

Redux is based on several important concepts:

| Concept | Meaning |
|---|---|
| Store | Central location containing application state |
| State | Current data of the application |
| Action | Object describing what happened |
| Dispatch | Sends an action to Redux |
| Reducer | Function that calculates the next state |
| Selector | Reads specific data from the store |
| Middleware | Runs between dispatch and reducer |
| Slice | Redux Toolkit way to group state + reducers |
| Async logic | API/background operations handled with middleware such as Saga or Thunk |

---

# 3. Redux Architecture

The classic Redux flow is:

```text
User Interaction
      ↓
dispatch(action)
      ↓
Middleware
      ↓
Reducer
      ↓
Redux Store
      ↓
React Component
      ↓
UI Updated
```

For Redux Saga:

```text
React Component
      ↓
dispatch(action)
      ↓
Redux Middleware
      ↓
Redux Saga
      ↓
API Request
      ↓
API Response
      ↓
dispatch(success/failure)
      ↓
Reducer
      ↓
Redux Store
      ↓
React UI
```

---

# 4. Redux vs React useState

## React useState

Use `useState()` when state is mostly local to a component.

Example:

```jsx
const [count, setCount] = useState(0);
```

Good for:

- Modal open/close
- Input values
- Local counters
- Toggle buttons
- Component-specific state

## Redux

Redux is useful when state is shared by many components.

Examples:

- Logged-in user
- Authentication status
- Shopping cart
- Products
- Orders
- Global notifications
- Application settings
- Large API datasets

---

# 5. Redux Toolkit

Modern Redux development normally uses **Redux Toolkit (RTK)**.

Redux Toolkit reduces Redux boilerplate and provides APIs such as:

```text
configureStore()
createSlice()
createAsyncThunk()
createEntityAdapter()
```

For this tutorial, we will use:

```text
React
Vite
Redux Toolkit
React Redux
Redux Saga
Axios
JSON Server
```

---

# 6. Create React Application Using Vite

## Step 1: Check Node.js

```bash
node -v
npm -v
```

Recommended:

```text
Node.js 18+
```

## Step 2: Create Vite Application

```bash
npm create vite@latest redux-vite-app
```

Select:

```text
Framework: React
Variant: JavaScript
```

Or directly:

```bash
npm create vite@latest redux-vite-app -- --template react
```

## Step 3: Enter Project

```bash
cd redux-vite-app
```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Install Redux Toolkit and React Redux

```bash
npm install @reduxjs/toolkit react-redux
```

## Step 6: Install Redux Saga and Axios

```bash
npm install redux-saga axios
```

## Step 7: Start Vite

```bash
npm run dev
```

---

# 7. Important Packages

## @reduxjs/toolkit

Modern Redux development package.

```bash
npm install @reduxjs/toolkit
```

## react-redux

Connects React components to Redux.

```bash
npm install react-redux
```

## redux-saga

Handles complex asynchronous operations and side effects.

```bash
npm install redux-saga
```

## axios

Used for HTTP/API requests.

```bash
npm install axios
```

---

# 8. Recommended Project Architecture

A clean Redux application can be organized like this:

```text
redux-vite-app/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── features/
│   │   ├── counter/
│   │   │   └── counterSlice.js
│   │   │
│   │   └── users/
│   │       ├── userSlice.js
│   │       └── userSaga.js
│   │
│   ├── saga/
│   │   └── rootSaga.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── components/
│   │   └── Counter.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

# 9. Redux Lifecycle / Data Flow

Redux does not have a component lifecycle like React's `componentDidMount()`.

Instead, Redux has a **state update lifecycle**.

The main flow is:

```text
1. User interacts with UI
        ↓
2. Component dispatches action
        ↓
3. Middleware receives action
        ↓
4. Reducer processes action
        ↓
5. Store updates state
        ↓
6. React Redux detects changed state
        ↓
7. Component re-renders
```

## Step 1 — Event

Example:

```jsx
<button onClick={() => dispatch(increment())}>
  +
</button>
```

## Step 2 — Dispatch

```jsx
dispatch(increment());
```

The action is sent to Redux.

## Step 3 — Middleware

Middleware can inspect or process the action.

Examples:

```text
Redux Saga
Redux Thunk
Logging middleware
Custom middleware
```

## Step 4 — Reducer

The reducer calculates the new state.

```js
increment: (state) => {
  state.value += 1;
}
```

## Step 5 — Store

Redux updates the central state.

```text
state.value
0 → 1
```

## Step 6 — Subscription

Components using the changed state are notified.

## Step 7 — Re-render

React renders the new value.

```text
0
↓
1
```

---

# 10. Redux Action

An action describes what happened.

Example:

```js
{
  type: "counter/increment"
}
```

An action can also contain data:

```js
{
  type: "counter/incrementByAmount",
  payload: 5
}
```

---

# 11. Redux Reducer

A reducer determines how state changes.

Conceptually:

```js
(previousState, action) => newState
```

Example:

```js
function counterReducer(state, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1
    };
  }

  return state;
}
```

Redux Toolkit uses Immer internally, so slice reducers can use code that looks mutable:

```js
state.value += 1;
```

Redux Toolkit safely produces the immutable update.

---

# 12. Redux Store

The store contains the application's Redux state.

With Redux Toolkit:

```js
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

# 13. Provider

React needs access to the Redux store.

Use `Provider` in `main.jsx`.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

---

# 14. useSelector()

`useSelector()` reads data from Redux.

```jsx
import { useSelector } from "react-redux";

const count = useSelector((state) => state.counter.value);
```

---

# 15. useDispatch()

`useDispatch()` sends an action.

```jsx
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

dispatch(increment());
```

---

# 16. Simple Counter Application with Redux Toolkit

Now we will create a complete counter application.

## Folder Structure

```text
src/
├── app/
│   └── store.js
│
├── features/
│   └── counter/
│       └── counterSlice.js
│
├── App.jsx
└── main.jsx
```

---

## Step 1 — Create counterSlice.js

Create:

```text
src/features/counter/counterSlice.js
```

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    reset: (state) => {
      state.value = 0;
    }
  }
});

export const {
  increment,
  decrement,
  incrementByAmount,
  reset
} = counterSlice.actions;

export default counterSlice.reducer;
```

---

# 17. Configure Redux Store

Create:

```text
src/app/store.js
```

```js
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

---

# 18. main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

---

# 19. App.jsx

```jsx
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  reset
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Redux Toolkit Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default App;
```

---

# 20. Counter Flow

When the user clicks `+`:

```text
Button
 ↓
dispatch(increment())
 ↓
counterSlice reducer
 ↓
state.value += 1
 ↓
Redux Store
 ↓
useSelector()
 ↓
React re-render
```

---

# 21. Redux Saga

Redux Saga is middleware used for handling side effects.

Side effects include:

```text
API calls
Timers
Background operations
Authentication
Data synchronization
Complex async workflows
```

Saga uses generator functions.

Example:

```js
function* helloSaga() {
  console.log("Saga started");
}
```

---

# 22. Why Redux Saga?

A simple application may use:

```text
Redux Toolkit + createAsyncThunk
```

For more complex workflows, Saga can be useful.

Example:

```text
User Login
    ↓
API request
    ↓
Token received
    ↓
Save token
    ↓
Fetch profile
    ↓
Fetch permissions
    ↓
Redirect user
```

Saga makes such workflows explicit and controllable.

---

# 23. Redux Saga Important Functions

## takeLatest()

Runs the latest request and cancels the previous running task.

```js
yield takeLatest("users/fetchUsers", fetchUsersSaga);
```

Useful for:

```text
Search
Autocomplete
Repeated requests
```

## takeEvery()

Runs every matching action.

```js
yield takeEvery("users/fetchUsers", fetchUsersSaga);
```

## call()

Calls a function/API.

```js
const response = yield call(api.get, "/users");
```

## put()

Dispatches another Redux action.

```js
yield put(usersSuccess(response.data));
```

## select()

Reads Redux state inside Saga.

```js
const token = yield select(
  (state) => state.auth.token
);
```

## delay()

Waits for a specified period.

```js
yield delay(1000);
```

---

# 24. Saga Lifecycle

The Saga lifecycle is:

```text
Component
   ↓
dispatch()
   ↓
Saga middleware
   ↓
Watcher Saga
   ↓
Worker Saga
   ↓
API
   ↓
Response
   ↓
put(success/failure)
   ↓
Reducer
   ↓
Store
   ↓
Component

```

---

# 25. Install JSON Server

For this practical CRUD project, JSON Server will act as a simple REST API.

Install:

```bash
npm install -D json-server
```

Create:

```text
db.json
```

Example:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Amit",
      "email": "amit@example.com",
      "city": "Rajkot"
    },
    {
      "id": 2,
      "name": "Neha",
      "email": "neha@example.com",
      "city": "Ahmedabad"
    }
  ]
}
```

Run:

```bash
npx json-server db.json --port 3000
```

API:

```text
GET     http://localhost:3000/users
GET     http://localhost:3000/users/1
POST    http://localhost:3000/users
PUT     http://localhost:3000/users/1
PATCH   http://localhost:3000/users/1
DELETE  http://localhost:3000/users/1
```

---

# 26. CRUD Architecture with Redux Saga

```text
React Component
       ↓
dispatch(fetchUsers())
       ↓
Redux Saga
       ↓
Axios
       ↓
JSON Server API
       ↓
Response
       ↓
Saga
       ↓
dispatch(fetchUsersSuccess(data))
       ↓
Reducer
       ↓
Redux Store
       ↓
React Component
```

For CREATE:

```text
Form
 ↓
dispatch(addUser(data))
 ↓
Saga
 ↓
POST /users
 ↓
API
 ↓
Success
 ↓
Reducer
 ↓
Store
```

For UPDATE:

```text
Edit Form
 ↓
dispatch(updateUser(data))
 ↓
Saga
 ↓
PUT /users/:id
 ↓
API
 ↓
Reducer
 ↓
Store
```

For DELETE:

```text
Delete Button
 ↓
dispatch(deleteUser(id))
 ↓
Saga
 ↓
DELETE /users/:id
 ↓
API
 ↓
Reducer
 ↓
Store
```

---

# 27. CRUD Project Structure

```text
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── users/
│       ├── userSlice.js
│       └── userSaga.js
│
├── saga/
│   └── rootSaga.js
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

# 28. Axios API Service

Create:

```text
src/services/api.js
```

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;
```

---

# 29. User Slice

Create:

```text
src/features/users/userSlice.js
```

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addUser: (state) => {
      state.loading = true;
      state.error = null;
    },

    addUserSuccess: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },

    addUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateUser: (state) => {
      state.loading = true;
      state.error = null;
    },

    updateUserSuccess: (state, action) => {
      state.loading = false;

      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },

    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteUser: (state) => {
      state.loading = true;
      state.error = null;
    },

    deleteUserSuccess: (state, action) => {
      state.loading = false;

      state.users = state.users.filter(
        (user) => user.id !== action.payload
      );
    },

    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,

  addUser,
  addUserSuccess,
  addUserFailure,

  updateUser,
  updateUserSuccess,
  updateUserFailure,

  deleteUser,
  deleteUserSuccess,
  deleteUserFailure
} = userSlice.actions;

export default userSlice.reducer;
```

---

# 30. User Saga

Create:

```text
src/features/users/userSaga.js
```

```js
import {
  call,
  put,
  takeLatest
} from "redux-saga/effects";

import api from "../../services/api";

import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,

  addUser,
  addUserSuccess,
  addUserFailure,

  updateUser,
  updateUserSuccess,
  updateUserFailure,

  deleteUser,
  deleteUserSuccess,
  deleteUserFailure
} from "./userSlice";

function* fetchUsersWorker() {
  try {
    const response = yield call(
      api.get,
      "/users"
    );

    yield put(
      fetchUsersSuccess(response.data)
    );
  } catch (error) {
    yield put(
      fetchUsersFailure(
        error.message
      )
    );
  }
}

function* addUserWorker(action) {
  try {
    const response = yield call(
      api.post,
      "/users",
      action.payload
    );

    yield put(
      addUserSuccess(response.data)
    );
  } catch (error) {
    yield put(
      addUserFailure(
        error.message
      )
    );
  }
}

function* updateUserWorker(action) {
  try {
    const { id, ...userData } =
      action.payload;

    const response = yield call(
      api.put,
      `/users/${id}`,
      userData
    );

    yield put(
      updateUserSuccess(response.data)
    );
  } catch (error) {
    yield put(
      updateUserFailure(
        error.message
      )
    );
  }
}

function* deleteUserWorker(action) {
  try {
    yield call(
      api.delete,
      `/users/${action.payload}`
    );

    yield put(
      deleteUserSuccess(
        action.payload
      )
    );
  } catch (error) {
    yield put(
      deleteUserFailure(
        error.message
      )
    );
  }
}

export default function* userSaga() {
  yield takeLatest(
    fetchUsers.type,
    fetchUsersWorker
  );

  yield takeLatest(
    addUser.type,
    addUserWorker
  );

  yield takeLatest(
    updateUser.type,
    updateUserWorker
  );

  yield takeLatest(
    deleteUser.type,
    deleteUserWorker
  );
}
```

---

# 31. Root Saga

Create:

```text
src/saga/rootSaga.js
```

```js
import {
  all,
  fork
} from "redux-saga/effects";

import userSaga from "../features/users/userSaga";

export default function* rootSaga() {
  yield all([
    fork(userSaga)
  ]);
}
```

---

# 32. Configure Store with Saga Middleware

Update:

```text
src/app/store.js
```

```js
import {
  configureStore
} from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import userReducer from "../features/users/userSlice";

import rootSaga from "../saga/rootSaga";

const sagaMiddleware =
  createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
```

---

# 33. Complete CRUD App.jsx

```jsx
import {
  useEffect,
  useState
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser
} from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  const {
    users,
    loading,
    error
  } = useSelector(
    (state) => state.users
  );

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    city: ""
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.city) {
      alert("Please fill all fields");
      return;
    }

    if (form.id) {
      dispatch(updateUser(form));
    } else {
      dispatch(
        addUser({
          name: form.name,
          email: form.email,
          city: form.city
        })
      );
    }

    setForm({
      id: null,
      name: "",
      email: "",
      city: ""
    });
  };

  const handleEdit = (user) => {
    setForm(user);
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete?"
      )
    ) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div
      style={{
        width: "900px",
        maxWidth: "95%",
        margin: "40px auto"
      }}
    >
      <h1>Redux Saga CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />

        <button type="submit">
          {form.id ? "Update" : "Add"}
        </button>
      </form>

      <hr />

      {loading && <p>Loading...</p>}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>

              <td>
                <button
                  onClick={() =>
                    handleEdit(user)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(user.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

---

# 34. main.jsx for CRUD

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

---

# 35. Running the CRUD Project

Open terminal 1:

```bash
npm run dev
```

Open terminal 2:

```bash
npx json-server db.json --port 3000
```

Now:

```text
React:
http://localhost:5173

JSON Server:
http://localhost:3000/users
```

---

# 36. CRUD API Summary

## GET

```js
yield call(api.get, "/users");
```

## GET Single User

```js
yield call(
  api.get,
  `/users/${id}`
);
```

## POST

```js
yield call(
  api.post,
  "/users",
  userData
);
```

## PUT

```js
yield call(
  api.put,
  `/users/${id}`,
  userData
);
```

## PATCH

```js
yield call(
  api.patch,
  `/users/${id}`,
  userData
);
```

## DELETE

```js
yield call(
  api.delete,
  `/users/${id}`
);
```

---

# 37. Redux Toolkit + Saga Responsibilities

A useful separation is:

```text
Redux Slice
    ↓
State + reducers + actions

Redux Saga
    ↓
Async operations + API calls

Axios
    ↓
HTTP communication

API
    ↓
Database/backend

React
    ↓
User interface
```

---

# 38. Why Saga Uses Generators

Saga uses JavaScript generator functions:

```js
function* fetchUsersWorker() {
  const response = yield call(
    api.get,
    "/users"
  );
}
```

The `yield` keyword allows Saga middleware to control asynchronous effects.

Instead of directly executing the API request inside Redux logic, Saga describes the operation:

```js
yield call(api.get, "/users");
```

Saga middleware executes it and resumes the generator when the result is available.

---

# 39. Saga Watcher and Worker Pattern

## Watcher

The watcher listens for Redux actions.

```js
function* userSaga() {
  yield takeLatest(
    fetchUsers.type,
    fetchUsersWorker
  );
}
```

## Worker

The worker performs the actual operation.

```js
function* fetchUsersWorker() {
  const response = yield call(
    api.get,
    "/users"
  );

  yield put(
    fetchUsersSuccess(response.data)
  );
}
```

Architecture:

```text
Action
  ↓
Watcher
  ↓
Worker
  ↓
API
  ↓
Success/Failure Action
```

---

# 40. Loading, Success and Failure Pattern

A common Redux API state looks like:

```js
{
  data: [],
  loading: false,
  error: null
}
```

During request:

```js
{
  data: [],
  loading: true,
  error: null
}
```

Success:

```js
{
  data: [...],
  loading: false,
  error: null
}
```

Failure:

```js
{
  data: [],
  loading: false,
  error: "Network Error"
}
```

This pattern is very useful in real projects.

---

# 41. Redux DevTools

Redux Toolkit automatically works well with Redux DevTools when the extension is installed.

You can inspect:

```text
Actions
State
Action Payload
Previous State
Next State
Dispatch sequence
```

For example:

```text
counter/increment
counter/increment
counter/incrementByAmount
counter/reset
```

This makes debugging much easier.

---

# 42. Common Redux Mistakes

## Mistake 1 — Forgetting Provider

Incorrect:

```jsx
<App />
```

Correct:

```jsx
<Provider store={store}>
  <App />
</Provider>
```

## Mistake 2 — Wrong selector path

If store is:

```js
reducer: {
  counter: counterReducer
}
```

Use:

```js
state.counter.value
```

Not:

```js
state.value
```

## Mistake 3 — Forgetting sagaMiddleware.run()

You must have:

```js
sagaMiddleware.run(rootSaga);
```

## Mistake 4 — Forgetting Saga middleware

The store needs:

```js
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: false
  }).concat(sagaMiddleware)
```

## Mistake 5 — API server not running

If JSON Server is stopped, Axios will fail.

Run:

```bash
npx json-server db.json --port 3000
```

---

# 43. Redux Toolkit vs Redux Saga

They solve different problems.

| Technology | Main Responsibility |
|---|---|
| Redux Toolkit | Redux state management and Redux development |
| React Redux | React ↔ Redux connection |
| Redux Saga | Async side effects/workflows |
| Axios | HTTP requests |
| JSON Server | Mock REST API |

A typical architecture is:

```text
React
 ↓
React Redux
 ↓
Redux Toolkit
 ↓
Redux Saga
 ↓
Axios
 ↓
Backend API
```

---

# 44. Redux vs Redux Toolkit vs Redux Saga

### Redux

Core state-management pattern/library.

### Redux Toolkit

Official recommended way to write Redux logic with less boilerplate.

### Redux Saga

Middleware for managing asynchronous side effects and complex workflows.

They are not direct replacements for each other.

```text
Redux
  +
Redux Toolkit
  +
Redux Saga
  +
React Redux
```

can be used together.

---

# 45. Complete Installation Commands

For a new Vite project:

```bash
npm create vite@latest redux-vite-app -- --template react

cd redux-vite-app

npm install

npm install @reduxjs/toolkit react-redux

npm install redux-saga axios

npm install -D json-server

npm run dev
```

For JSON Server:

```bash
npx json-server db.json --port 3000
```

---

# 46. Complete Learning Roadmap

Learn Redux in this order:

```text
1. React useState
       ↓
2. React useContext
       ↓
3. Redux fundamentals
       ↓
4. Store
       ↓
5. Actions
       ↓
6. Reducers
       ↓
7. Dispatch
       ↓
8. Selectors
       ↓
9. Redux Toolkit
       ↓
10. createSlice
       ↓
11. configureStore
       ↓
12. React Redux
       ↓
13. API handling
       ↓
14. Redux Saga
       ↓
15. Axios
       ↓
16. CRUD
       ↓
17. Authentication
       ↓
18. Advanced async workflows
```

---

# 47. Final Architecture

A professional Redux + Saga application can look like:

```text
                    React UI
                       │
                       ▼
                 useSelector()
                 useDispatch()
                       │
                       ▼
                Redux Toolkit
                 createSlice
                       │
                       ▼
                  Redux Store
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
          Reducer          Saga Middleware
                                 │
                                 ▼
                           Worker Saga
                                 │
                                 ▼
                               Axios
                                 │
                                 ▼
                           Backend API
                                 │
                                 ▼
                           Database
                                 │
                                 ▼
                          API Response
                                 │
                                 ▼
                          Saga `put()`
                                 │
                                 ▼
                            Reducer
                                 │
                                 ▼
                           Redux Store
                                 │
                                 ▼
                              React
```

---

# 48. Important Interview Questions

## What is Redux?

Redux is a predictable centralized state-management library.

## What is Redux Toolkit?

Redux Toolkit is the official recommended approach for writing Redux logic with less boilerplate.

## What is a store?

The store holds the application's Redux state.

## What is an action?

An action describes an event or state-change request.

## What is a reducer?

A reducer calculates the next state from the current state and an action.

## What is dispatch?

`dispatch()` sends an action to Redux.

## What is useSelector?

It reads selected data from Redux state.

## What is useDispatch?

It provides the Redux dispatch function to a React component.

## What is Redux Saga?

Redux Saga is middleware for handling side effects and asynchronous workflows.

## What is `call()`?

It describes a function call/effect for Saga middleware.

## What is `put()`?

It dispatches another Redux action from a Saga.

## What is `takeLatest()`?

It starts the latest matching task and cancels the previous running task.

## What is `takeEvery()`?

It allows every matching action to start a task.

## Does Redux have React component lifecycle methods?

No. Redux has a state/data-flow lifecycle rather than React component lifecycle methods.

---

# 49. One-Line Revision

```text
Redux = Centralized State Management

Redux Toolkit = Modern Redux Development

React Redux = Connect React with Redux

Redux Saga = Async/Side Effect Management

Axios = HTTP/API Client

JSON Server = Simple Mock REST API
```

## Most Important Flow

```text
Component
   ↓
dispatch(action)
   ↓
Saga Middleware
   ↓
API
   ↓
put(successAction)
   ↓
Reducer
   ↓
Store
   ↓
useSelector()
   ↓
UI
```

This architecture is suitable for learning and for building larger React applications with centralized state, API CRUD operations, and asynchronous workflows.

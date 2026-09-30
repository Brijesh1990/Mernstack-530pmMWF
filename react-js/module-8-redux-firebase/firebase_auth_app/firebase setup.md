# Firebase + React (Vite) Authentication Setup

## What is Firebase?
Firebase is a Backend-as-a-Service (BaaS) by Google that provides hosted services including realtime databases, Firestore, authentication, storage, hosting, cloud functions, analytics, and more. It simplifies building apps by providing ready-made backend services and SDKs.

## Quick Firebase Project Setup
1. Go to https://console.firebase.google.com and sign in with a Google account.
2. Click "Add project" and follow the prompts to create a new project.
3. In the project console, go to "Authentication" -> "Get Started" and enable the sign-in methods you need (Email/Password for this guide).
4. In project settings (gear icon) -> "Your apps" -> add a web app. Copy the Firebase config object (apiKey, authDomain, projectId, etc.).
5. (Optional) In "Firestore" or "Realtime Database" enable if you need user data storage.

## Create React App with Vite
1. Create the app (example):

	npm create vite@latest my-app -- --template react
	cd my-app

2. Install dependencies:
	npm install firebase react-router-dom

3. Recommended package.json scripts are created by Vite; run with `npm run dev`.
## Firebase (modular v9+) setup file

Create `src/firebase.js` (or .ts) and paste your config:
```js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
	apiKey: 'YOUR_API_KEY',
	authDomain: 'YOUR_AUTH_DOMAIN',
	projectId: 'YOUR_PROJECT_ID',
	storageBucket: 'YOUR_STORAGE_BUCKET',
	messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
	appId: 'YOUR_APP_ID',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
```
Replace the placeholder values with the config from the Firebase console.

## Auth helper functions
Create `src/services/auth.js`:

```js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'

export const register = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
	return signOut(auth)
}
```
## React components (simple examples)

Create `src/App.jsx` with routing and basic auth state:
```jsx
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
	const [user, setUser] = useState(null)
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, u => setUser(u))
		return () => unsub()
	}, [])

	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home user={user} />} />
				<Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
				<Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
```
Create `src/pages/Register.jsx`:

```jsx
import React, { useState } from 'react'
import { register } from '../services/auth'
export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
	e.preventDefault()
	setError(null)
	try {
			await register(email, password)
		} catch (err) {
			setError(err.message)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>
			<input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
	<input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
	<button type="submit">Register</button>
	{error && <p>{error}</p>}
		</form>
	)
}
```
Create `src/pages/Login.jsx`:

```jsx
import React, { useState } from 'react'
import { login } from '../services/auth'
export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
	e.preventDefault()
	setError(null)
	try {
			await login(email, password)
		} catch (err) {
			setError(err.message)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
	<input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
	<button type="submit">Login</button>
	{error && <p>{error}</p>}
		</form>
	)
}
```
Create `src/pages/Home.jsx`:

```jsx
import React from 'react'
import { logout } from '../services/auth'
export default function Home({ user }) {
	return (
		<div>
			<h1>Home</h1>
			{user ? (
				<div>
					<p>Signed in as: {user.email}</p>
					<button onClick={() => logout()}>Logout</button>
				</div>
			) : (
				<p>Not signed in</p>
			)}
		</div>
	)
}
```
## Notes

- Ensure you replace firebase config with values from your Firebase project.
- Enable Email/Password in Firebase Authentication console.
- For production, secure your API keys and consider environment variables (Vite: import.meta.env).

This is a minimal starting point for register, login and logout using Firebase Auth in a Vite + React app.
```

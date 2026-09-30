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
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
    <div className="container">
      {/* Brand */}
      <Link className="navbar-brand fw-bold fs-3" to="/">
        🚀 MyApp
      </Link>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          {!user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-warning ms-lg-3 mt-2 mt-lg-0 px-4 rounded-pill" to="/login">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item me-lg-3 mt-2 mt-lg-0">
                <span className="navbar-text text-white">
                  👋 {user.email}
                </span>
              </li>

             
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>

  <Routes>
    <Route path="/" element={<Home user={user} />} />

    <Route
      path="/register"
      element={user ? <Navigate to="/" /> : <Register />}
    />

    <Route
      path="/login"
      element={user ? <Navigate to="/" /> : <Login />}
    />
  </Routes>
</BrowserRouter>
)
}

export default App
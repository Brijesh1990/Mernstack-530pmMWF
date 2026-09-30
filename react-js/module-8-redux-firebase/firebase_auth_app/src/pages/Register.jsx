import React, { useState } from 'react'
import { register } from '../services/auth'
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)

const handleSubmit = async e => {
e.preventDefault()
setError(null)
try {
await register(email, password)
// pass a success messages
toast("Thanks your account created!");
} catch (err) {
setError(err.message)
}
}

return (
<div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-10 col-md-8 col-lg-5">

      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4 p-md-5">
         <ToastContainer />
          <form onSubmit={handleSubmit}>
            <h2 className="text-center fw-bold mb-4">Register</h2>

            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success btn-lg w-100"
            >
              Register
            </button>

            {error && (
              <div className="alert alert-danger mt-3 mb-0 text-center">
                {error}
              </div>
            )}
          </form>

        </div>
      </div>

    </div>
  </div>
</div>
)
}
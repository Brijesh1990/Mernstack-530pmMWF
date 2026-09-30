import React from 'react'

export default function FooterApp() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
  <div className="container">
    <div className="row">
      {/* About / Log Details */}
      <div className="col-md-4 mb-3">
        <h5>Log Details</h5>
        <p className="small">
          View and manage system logs efficiently. Track activity, monitor
          errors, and maintain transparency across your platform.
        </p>
      </div>
      {/* Quick Links */}
      <div className="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-decoration-none text-light">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-light">
              Log History
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-light">
              Error Reports
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-light">
              Settings
            </a>
          </li>
        </ul>
      </div>
      {/* Social Media */}
      <div className="col-md-4 mb-3">
        <h5>Follow Us</h5>
        <a href="#" className="text-light me-3">
          <i className="bi bi-facebook" /> Facebook
        </a>
        <br />
        <a href="#" className="text-light me-3">
          <i className="bi bi-twitter" /> Twitter
        </a>
        <br />
        <a href="#" className="text-light me-3">
          <i className="bi bi-linkedin" /> LinkedIn
        </a>
        <br />
        <a href="#" className="text-light">
          <i className="bi bi-github" /> GitHub
        </a>
      </div>
    </div>
    <hr className="bg-light" />
    {/* Bottom */}
    <div className="text-center small">
      © 2026 Your Company | All Rights Reserved
    </div>
  </div>
</footer>

  )
}

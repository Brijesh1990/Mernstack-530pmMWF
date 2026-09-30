import React from "react";
import { logout } from '../services/auth'

const Home = ({ user}) => {

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-primary bg-gradient text-white py-5"
        style={{ minHeight: "70vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 fw-bold mb-3">
                Welcome to <span className="text-warning">MyApp</span>
              </h1>

              <p className="lead mb-4">
                Build amazing applications with React and Bootstrap 5.3.
                Responsive, modern, and beautiful UI.
              </p>

              {user ? (
                <div className="mt-4">
                  <div className="alert alert-light shadow-sm rounded-4">
                    <h5 className="text-dark mb-2">
                      👋 Welcome Back!
                    </h5>

                    <p className="mb-2 text-dark">
                      Signed in as
                      <br />
                      <strong>{user.email}</strong>
                    </p>

                    <button
                      className="btn btn-danger rounded-pill px-4"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="fs-5">
                    You're currently not signed in.
                  </p>

                  <button className="btn btn-warning btn-lg rounded-pill px-4">
                    Get Started
                  </button>
                </div>
              )}
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                alt="Hero"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="text-muted">
              Everything you need to build modern web applications.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center p-4">
                <div className="display-4 text-primary mb-3">⚡</div>
                <h4>Fast</h4>
                <p className="text-muted">
                  Lightning-fast performance with React and Bootstrap.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center p-4">
                <div className="display-4 text-success mb-3">📱</div>
                <h4>Responsive</h4>
                <p className="text-muted">
                  Looks amazing on desktop, tablet, and mobile devices.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center p-4">
                <div className="display-4 text-danger mb-3">🔒</div>
                <h4>Secure</h4>
                <p className="text-muted">
                  Authentication ready with protected routes and user sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <h2 className="fw-bold text-primary">10K+</h2>
              <p>Users</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-success">500+</h2>
              <p>Projects</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-danger">99%</h2>
              <p>Uptime</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-warning">24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} MyApp. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header className="bg-primary text-white p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">Helping Hands NGO</h1>
          <nav>
            <a href="#home" className="text-white mx-2">
              Home
            </a>
            <a href="#about" className="text-white mx-2">
              About Us
            </a>
            <a href="#volunteer" className="text-white mx-2">
              Volunteer
            </a>
          </nav>
        </div>
      </header>

      <main className="container my-5">
        <section id="home" className="mb-5 text-center">
          <h2>Welcome to Helping Hands</h2>
          <p className="lead">
            Dedicated to making a difference in our community through compassion
            and action.
          </p>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Helping Hands"
            className="img-fluid rounded shadow"
          />
        </section>

        <section id="about" className="mb-5">
          <h3>About Us</h3>
          <p>
            Helping Hands is a non-profit organization committed to supporting
            vulnerable communities. Founded in 2010, we focus on education,
            healthcare, and social empowerment.
          </p>
          <ul>
            <li>Community Outreach Programs</li>
            <li>Educational Support</li>
            <li>Healthcare Initiatives</li>
          </ul>
        </section>

        <section id="volunteer" className="mb-5">
          <h3>Volunteer With Us</h3>
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your full name"
                required
              />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
              <div className="invalid-feedback">Please enter a valid email.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="(optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Why do you want to volunteer?
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                required
              ></textarea>
              <div className="invalid-feedback">
                Please share your motivation.
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-light text-center py-3">
        <small>© 2025 Helping Hands NGO. All rights reserved.</small>
      </footer>

      <script>
        {`
          // Bootstrap form validation
          (() => {
            'use strict';
            const forms = document.querySelectorAll('.needs-validation');
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          })();
        `}
      </script>
    </>
  );
}

export default App;

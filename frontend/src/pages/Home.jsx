import React from 'react'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Homie</div>
        <div className="nav-links">
          <Link to="/buy">Buy</Link>
          <Link to="/rent">Rent</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup/options" className="signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Home</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search by location, property type..."
          />
          <div className="property-types">
            <div className="property-type">Apartments</div>
            <div className="property-type">Houses</div>
            <div className="property-type">Villas</div>
            <div className="property-type">Plots</div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <Link to="/company">Company</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/press">Press</Link>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <Link to="/help">Help Center</Link>
            <a href="mailto:support@homie.com">Email Us</a>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home

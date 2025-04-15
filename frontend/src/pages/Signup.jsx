import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    navigate(`/signup/${role}`);
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="logo">Homie</div>
      </nav>

      <div className="selection-container">
        <h1 className="selection-title">Choose Your Role</h1>
        <div className="role-cards">
          <div className="role-card buyer" 
          onClick={() => selectRole("buyer")}
          >
            <i className="fas fa-home"></i>
            <h3>I want to Buy</h3>
            <p>
              Find and purchase your dream property with our extensive listings and expert guidance.
            </p>
          </div>

          <div className="role-card seller"
           onClick={() => selectRole("seller")}
           >
            <i className="fas fa-key"></i>
            <h3>I want to Sell</h3>
            <p>
              List your property and connect with potential buyers in your area.
            </p>
          </div>

          <div className="role-card renter" 
          onClick={() => selectRole("renter")}
          >
            <i className="fas fa-building"></i>
            <h3>I want to Rent</h3>
            <p>
              Discover rental properties that match your preferences and budget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

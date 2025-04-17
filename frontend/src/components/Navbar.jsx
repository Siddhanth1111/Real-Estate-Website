import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUser } from '../Context/UserContext';


const Navbar = () => {
  
  const {user, setUser, credits, loading} = useUser();
  const navigate = useNavigate();

  

  const handleLogout = () => {
  localStorage.removeItem('user'); // Remove user data
  localStorage.removeItem('token'); // Remove token data
  setUser(null); // Update the user state to null
};

if(loading) return null;

  return (
    <div className="navbar">
      <Link to="/" className='logo'>Homie</Link>
      <div className="nav-links">
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        {user && user.role === 'seller' && <Link to="/sell">Sell</Link>}
        <Link to="/contact">Contact</Link>
      </div>

      <div className="auth-buttons">
        {user ? (
          <>
            <Link to="/profile" className="login">Hi, {user.name || "User"}</Link>
            <div className='signup-container'>
            <button className="signup" onClick={handleLogout}>Logout</button>
            <button onClick={()=>{
              navigate("/credits")
            }} style = {{backgroundColor : "red", color : "white"}} >{credits} </button>
            </div>
            
          </>
        ) : (
          <>
            <Link to="/login" className="login">Login</Link>
            <Link to="/signup/options" className="signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

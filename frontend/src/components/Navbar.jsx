import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [user, setUser] = useState(null);
  const [credit,setCredit] = useState(5);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  

  const handleLogout = () => {
  localStorage.removeItem('user'); // Remove user data
  localStorage.removeItem('token'); // Remove token data
  setUser(null); // Update the user state to null
};


  return (
    <div className="navbar">
      <div className="logo">Homie</div>

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
            <Link to="/credits" style = {{backgroundColor : "red", color : "white"}} >{credit} </Link>
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

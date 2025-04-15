import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Seller() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate(); // ✅ added

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:3000/seller', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, licenseNumber, phone }),
      });
  
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/'); // ✅ now works
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSignup} className="form-container">
        <h2 className="form-title">Register as Seller</h2>
        <input
          className="form-input"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="Phone Number"
          type="number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="License Number"
          type="number"
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button">Register</button>
      </form>
    </div>
  );
}

export default Seller;

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const token = localStorage.getItem('token');
function Buyer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ this line was missing

  async function onSubmitHandler(e) {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/buyer', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
            
          },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/'); // ✅ now this will work
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitHandler} className="form-container">
        <h2 className="form-title">Register as Buyer</h2>
        <input className="form-input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="form-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="form-input" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="form-button">Register</button>
      </form>
    </div>
  );
}

export default Buyer;

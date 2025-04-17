import { useState } from "react";
import { useUser } from "../Context/UserContext";


const CreditsPage = () => {
  
  const {credits, setCredits} = useUser();
  const handleBuyCredits = async (amount, price) => {
    // Later integrate Razorpay here
    alert(`Initiate payment of ₹${price} for ${amount} credits`);
    setCredits(credits + amount);
  };

  return (
    <div>

      <div style={{padding:60}}> 

      </div>

      <div className="credits-page">
      <h2 className="credits-title">Your Credits: {credits}</h2>

      <div className="packages-container">
        <div className="package-card">
          <h3>5 Credits</h3>
          <p>₹250</p>
          <button onClick={() => handleBuyCredits(5, 250)}>Buy</button>
        </div>

        <div className="package-card">
          <h3>10 Credits</h3>
          <p>₹450</p>
          <button onClick={() => handleBuyCredits(10, 450)}>Buy</button>
        </div>

        <div className="package-card">
          <h3>15 Credits</h3>
          <p>₹700</p>
          <button onClick={() => handleBuyCredits(15, 700)}>Buy</button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CreditsPage;

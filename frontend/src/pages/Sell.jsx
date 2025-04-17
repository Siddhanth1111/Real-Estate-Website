import React, { useState } from 'react';
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;


function Sell() {
  const [propertyName, setPropertyName] = useState('');
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:3000/sell', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}` // yeh header seller ka hai (isse access karke id daalte hai database mein)
      },
      body: JSON.stringify({
        propertyName,
        address,
        url,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Property submitted successfully!');
        setPropertyName('');
        setAddress('');
        setUrl('');
        setPrice('');
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to submit property.');
      });
  };

  return (
    <div className="properties">
      <h2 className="section-title">Sell Your Property</h2>
      <form className="sell-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Property Name</label>
          <input
            type="text"
            className="search-box"
            placeholder="Enter Property Name"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="search-box"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="search-box"
            placeholder="Paste Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="search-box"
            placeholder="Enter Price (e.g., 80L, 1.2Cr)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Sell;

import React from "react";


export function BuyCard({ propertyName, address, url, price }) {
  return (
    <div className="buy-card">
      <div className="buy-card-img">
        <img src={url} alt={propertyName} />
      </div>
      <div className="buy-card-info">
        <h3 className="property-name">{propertyName}</h3>
        <h4 className="property-address">{address}</h4>
        <h4 className="property-price">{price}</h4>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}

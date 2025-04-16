import React, { useEffect, useState } from "react";
import DealerContactModal from "./DealerContactModal";
import { useNavigate } from "react-router-dom";



export function BuyCard({ propertyName, address, url, price, userId, propertyId }) {
  const navigate = useNavigate();
  
  const [sellerName,setSellerName] = useState(" ");

  useEffect(()=>{
    fetch("http://localhost:3000/buy/name",{
      method : "post",
      headers : {
        "Content-type" : "application/json"
      },
      body:JSON.stringify({
        userId : userId
      })

    })
    .then((response)=>response.json())
    .then((data)=>{
      setSellerName(data.sellerName)
    })
  },[])

  return (
    <div className="buy-card" onClick={(e)=>{
      navigate(`/property/${propertyId}`)
    }}>
      <div className="buy-card-img">
        <img src={url} alt={propertyName} />
      </div>
      <div className="buy-card-info">
        <h3 className="property-name">{propertyName}</h3>
        <h4 className="property-address">{address}</h4>
        <h4 className="property-price">{price} INR</h4>
        <h4> Posted by {sellerName} </h4>
        <DealerContactModal></DealerContactModal>
      </div>
    </div>
  );
}

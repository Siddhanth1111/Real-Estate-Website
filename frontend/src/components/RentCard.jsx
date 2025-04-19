import React, { useEffect, useState } from "react";
import DealerContactModal from "./DealerContactModal";
import { data, useNavigate } from "react-router-dom";



export function RentCard({ propertyName, address, url, price, userId, propertyId }) {
  const navigate = useNavigate();
  
  const [sellerDetail,setSellerDetail] = useState({});

  useEffect(()=>{
    fetch("http://localhost:3000/rent/details",{
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
      setSellerDetail(data);
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
        <h4 className="property-price">Price: ₹{Number(price).toLocaleString("en-IN")}</h4>
        <h4> Posted by {sellerDetail.name} </h4>
        <DealerContactModal sellerPhone = {sellerDetail.phone} sellerMail = {sellerDetail.email} sellerName={sellerDetail.name} ></DealerContactModal>
      </div>
    </div>
  );
}

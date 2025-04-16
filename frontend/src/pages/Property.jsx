// Property.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DealerContactModal from '../components/DealerContactModal';


function Property() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/property/${propertyId}`)
      .then(res => res.json())
      .then(data => setProperty(data))
      .catch(err => console.error('Error fetching property:', err));
  }, [propertyId]);

  if (!property) return <div className="loader">Loading...</div>;

  return (
    <div>

        <div style={{padding : 70}}>

        </div>

        <div className="property-container2">
        <div className="property-image-section">
            <img src={property.url} alt={property.propertyName} className="property-image" />
        </div>

        <div className="property-details">
            <h1 className="property-title">{property.propertyName}</h1>
            <p className="property-location">📍 {property.address}</p>
            <p className="property-price">
                Price: ₹{Number(property.price).toLocaleString("en-IN")}
            </p>

            <div className="property-description">
            <h3>Description</h3>
            <p>{property.description || "No additional description provided."}</p>
            </div>

            <DealerContactModal></DealerContactModal>
        </div>
        </div>
    </div>
    
  );
}

export default Property;
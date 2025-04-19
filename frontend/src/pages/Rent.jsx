import { useState, useEffect, useMemo} from "react";
import { useUser } from "../Context/UserContext";
import { BuyCard } from "../components/BuyCard";
import { RentCard } from "../components/RentCard";

function Rent() {
  const { user, loading } = useUser();

  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      alert("Please wait, loading session...");
      return;
    }

    if (!user || !user.token) {
      alert("Please login before posting a property.");
      return;
    }

    const payload = {
      propertyName,
      address,
      description,
      url,
      price,
    };

    try {
      const response = await fetch("http://localhost:3000/rent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to post rent property");
      }

      alert("Property listed for rent successfully!");
      // Optionally, reset form
      setPropertyName("");
      setAddress("");
      setDescription("");
      setUrl("");
      setPrice("");
    } catch (error) {
      console.error("Error posting rent property:", error);
      alert("Something went wrong. Try again later.");
    }
  };

      const [list,setList] = useState([]);
      const [filter,setFilter] = useState("");
  
      useEffect(()=>{
          fetch("http://localhost:3000/rent",{
          })
          .then((response)=>response.json())    
          .then((data)=>{
              setList(data);
          })
      },[]);
  
      
      
      const filteredList = useMemo(()=>{
          return list.filter(x => x.propertyName.toLowerCase().includes(filter.toLowerCase()))
      },[filter,list])

  return (
    <div className="rent-container" style={{ padding: "80px 20px" }}>
      <h2>Post Property for Rent</h2>
      <form className="rent-form" onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
        <input
          type="text"
          placeholder="Property Name"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price (₹)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />
        <button type="submit" style={{ backgroundColor: "green", color: "white", padding: "10px" }}>
          Post Property
        </button>
      </form>


    <div>
            <div style={{padding : 50}} >
    
            </div>
    
        <div className="input-container">
        <input 
            className="filter-input"
            placeholder="Search property..."
            onChange={(e) => setFilter(e.target.value)} 
        />
        </div>
    
                <div className="property-container">
                {filteredList.map((each)=>(
                    <RentCard 
                        propertyId = {each._id}
                        propertyName={each.propertyName}
                        address={each.address}
                        url = {each.url}
                        price = {each.price}
                        userId = {each.userId}

                    ></RentCard>
                ))}
                </div>
                
            </div>

    </div>
  );
}

export default Rent;

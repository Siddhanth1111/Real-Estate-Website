import { useState } from "react";
import { useUser } from "../Context/UserContext";

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
    </div>
  );
}

export default Rent;

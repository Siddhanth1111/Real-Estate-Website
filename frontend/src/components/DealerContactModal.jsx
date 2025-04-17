import React, { useState } from 'react';
import Modal from 'react-modal';
import { useUser } from '../Context/UserContext';

// Important: Bind modal to your appElement
Modal.setAppElement('#root');

const DealerContactModal = ({sellerMail, sellerPhone,sellerName}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const {user, credits,setCredits} = useUser();
  
  const openModal = async() => {
    if (!user) {
      alert("Please login to view dealer contact.");
      return;
    }

    if (credits < 1) {
      alert("You need at least 1 credit to view dealer contact.");
      return;
    }

    try {
        // Call backend to decrement credits
        const response = await fetch("http://localhost:3000/credits/decrement", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
  
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to decrement credits");
        }
  
        setCredits(data.updatedCredits); // Assume backend returns updated credit count
        setModalIsOpen(true);
  
      } catch (err) {
        console.error("Error decrementing credit:", err);
        alert("Something went wrong while deducting credits.");
      }

    // If all checks pass
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button 
        onClick={(e)=>{
          e.stopPropagation();
          openModal();
        }} 
        style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '4px' }}
      >
        Contact Dealer
      </button>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Dealer Contact Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            padding: '2rem',
            maxWidth: '400px',
            margin: 'auto',
            borderRadius: '10px',
            inset: '50% auto auto 50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <div onClick={(e)=>{
          e.stopPropagation();
        }}>
        <h2 style={{color : "blue"}}>Dealer Contact</h2>
        <p style={{color : "black"}}><strong>Name:</strong> {sellerName}</p>
        <p style={{color : "black"}} ><strong>Phone:</strong> +91 {sellerPhone}</p>
        <p style={{color : "black"}}><strong>Email:</strong> {sellerMail}</p>
        <button 
          onClick={closeModal} 
          style={{ marginTop: '20px', padding: '10px', borderRadius: '4px', backgroundColor : "blue", color : "white" }}
        >
          Close
        </button>
        </div>
        
      </Modal>
    </div>
  );
};

export default DealerContactModal;

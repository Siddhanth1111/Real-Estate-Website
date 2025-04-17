import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    feedback: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formsubmit.co/ajax/siddhanthchauhan1111mpspn@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Email: formData.email,
          Problem: formData.message,
          Feedback: formData.feedback
        })
      });

      const data = await res.json();

      if (data.success === 'true') {
        setStatus('Message sent successfully!');
        setFormData({ email: '', message: '', feedback: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div>

        <div style={{padding:65}}>

        </div>

        <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> siddhanthchauhan1111mpspn@gmail.com</p>
        <p> <a href="https://www.instagram.com/sid_chauhan1111/" target="_blank" rel="noopener noreferrer"><strong>Instagram</strong></a></p>
        <p><strong>Twitter:</strong> <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">@yourhandle</a></p>
        <p><strong>Address:</strong> Bangalore, India</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Describe your problem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Any additional feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
    </div>
    
  );
};

export default Contact;

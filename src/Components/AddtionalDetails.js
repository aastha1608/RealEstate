import React, { useState } from 'react';
import '../Cssfiles/DetailsForm.css'; 


const AdditionalDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
 
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <div className="form-left">
        <h1>Additional Details</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="form-right">
        <img
          src={'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600'} 
          alt="House Image"
        />
      </div>
    </div>
  );
};

export default AdditionalDetails;
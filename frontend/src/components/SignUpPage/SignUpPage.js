// src/pages/SignUpPage.js
import React, { useState } from "react";


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    fellowId: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd make an API request to register the user
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter your fullname"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fellowId"
          placeholder="Enter your 3mtt Fellow ID"
          value={formData.fellowId}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

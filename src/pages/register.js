import React, { useState } from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    address: "",
    phoneNumber: "",
    role: "CUSTOMER",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/api/auth/register", userData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("User registered successfully!");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error registering user");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Full Name" value={userData.name} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={userData.address} onChange={handleChange} required />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={userData.phoneNumber} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
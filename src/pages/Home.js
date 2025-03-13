import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import safeRides from "../assets/safe.jpg";
import price from "../assets/price.jpg";
import img from "../assets/availability.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MegaCity Cab Service</h1>
          <p>Reliable & Affordable Rides Anytime, Anywhere!</p>
          <div className="hero-buttons">
            <Link to="/vehicles">
              <button className="primary-btn">View Vehicles</button>
            </Link>
            <Link to="/login">
              <button className="secondary-btn">Login</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="services">
        <h2>Why Choose MegaCity Cab?</h2>
        <div className="service-cards">
           <div className="service-card">
              <img src={safeRides} alt="Safe Rides" />
              <h3>Safe & Secure Rides</h3>
              <p>All our drivers are verified, and our cabs are well-maintained for your safety.</p>
            </div>
            <div className="service-card">
               <img src={price} alt="Affordable Prices" />
               <h3>Affordable Prices</h3>
               <p>We offer competitive pricing with no hidden charges.</p>
            </div>
            <div className="service-card">
               <img src={img} alt="24/7 Availability" />
               <h3>24/7 Availability</h3>
               <p>Book a ride anytime, anywhere, with our round-the-clock service.</p>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Need a Ride Now?</h2>
        <p>Book your cab instantly with our fast and reliable booking system.</p>
        <Link to="/login">
          <button className="primary-btn">Book a Ride</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

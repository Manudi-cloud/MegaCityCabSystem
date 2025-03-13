import React from "react";
import { Link } from "react-router-dom";
import priusImage from "../assets/prius.jpg";
import hondaImage from "../assets/honda.jpg";
import altoImage from "../assets/alto.jpg";

// Dummy vehicle data
const vehicles = [
  { id: 1, name: "Toyota Prius", image: priusImage, price: "$10/km", available: true },
  { id: 2, name: "Honda City", image: hondaImage, price: "$12/km", available: false },
  { id: 3, name: "Suzuki Alto", image: altoImage, price: "$8/km", available: true },
];

const Dashboard = () => {
  return (
    <div>
      <h1>MegaCity Cab - Available Vehicles</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={vehicle.image} alt={vehicle.name} width="200" />
            <h3>{vehicle.name}</h3>
            <p>Price: {vehicle.price}</p>
            {vehicle.available ? (
              <Link to={`/booking/${vehicle.id}`}>
                <button>Book Now</button>
              </Link>
            ) : (
              <button disabled>Not Available</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

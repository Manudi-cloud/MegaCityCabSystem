import React, { useState, useEffect } from "react";
import axios from "axios";
import VehicleCard from "../components/vehicleCard";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/api/vehicles")
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error("Error fetching vehicles:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Available Vehicles</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {vehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;

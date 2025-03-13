import React from "react";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <img src={vehicle.imageUrl} alt={vehicle.name} />
      <h3>{vehicle.name}</h3>
      <p>Price: ${vehicle.pricePerKm} per km</p>
      {vehicle.available ? (
        <button>Book Now</button>
      ) : (
        <button disabled>Not Available</button>
      )}
    </div>
  );
};

export default VehicleCard;

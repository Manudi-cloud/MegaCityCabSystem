import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);

  const vehicles = [
    { id: 1, name: "Toyota Prius", price: "$10/km" },
    { id: 2, name: "Honda City", price: "$12/km" },
    { id: 3, name: "Suzuki Alto", price: "$8/km" },
  ];

  useEffect(() => {
    if (!sessionStorage.getItem("loggedIn")) {
      alert("Please log in to book a vehicle.");
      navigate("/login");
    } else {
      const selectedVehicle = vehicles.find((v) => v.id === parseInt(id));
      setVehicle(selectedVehicle);
    }
  }, [id, navigate]);

  return (
    <div>
      {vehicle ? (
        <>
          <h2>Book {vehicle.name}</h2>
          <p>Price: {vehicle.price}</p>
          <button onClick={() => alert("Booking Confirmed!")}>Confirm Booking</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Booking;

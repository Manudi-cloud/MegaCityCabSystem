import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css"; // Ensure CSS file is imported

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h1 className="heading">Admin Dashboard</h1>

      <div className="box-container">
        <div className="box">
          <h3>View</h3>
          <Link to="/admin/add" className="btn">View Customer Bookings</Link>
        </div>

        <div className="box">
          <h3>Insert</h3>
          <Link to="/admin/profile" className="btn">Insert Driver Details</Link>
        </div>

        <div className="box">
          <h3>Delete</h3>
          <Link to="/admin/search-packages" className="btn">Delete Driver Details</Link>
        </div>

        <div className="box">
          <h3>Update</h3>
          <Link to="/admin/add-packages" className="btn">Update Driver Details</Link>
        </div>

        <div className="box">
          <h3>Insert</h3>
          <Link to="/admin/update-packages" className="btn">Insert Vehicle Details</Link>
        </div>

        <div className="box">
          <h3>Delete</h3>
          <Link to="/admin/delete-packages" className="btn">Delete Vehicle Details</Link>
        </div>

        <div className="box">
          <h3>Update</h3>
          <Link to="/admin/view-users" className="btn">Update Vehicle Details</Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

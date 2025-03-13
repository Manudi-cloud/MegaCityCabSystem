import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css"; // Ensure CSS file is imported

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h1 className="heading">Admin Dashboard</h1>

      <div className="box-container">
        <div className="box">
          <h3>Admin</h3>
          <Link to="/admin/add" className="btn">Add Admin</Link>
        </div>

        <div className="box">
          <h3>Profile</h3>
          <Link to="/admin/profile" className="btn">View Profile</Link>
        </div>

        <div className="box">
          <h3>Search Packages</h3>
          <Link to="/admin/search-packages" className="btn">Search Packages</Link>
        </div>

        <div className="box">
          <h3>Add Packages</h3>
          <Link to="/admin/add-packages" className="btn">Add Packages</Link>
        </div>

        <div className="box">
          <h3>Update Packages</h3>
          <Link to="/admin/update-packages" className="btn">Update Packages</Link>
        </div>

        <div className="box">
          <h3>Delete Packages</h3>
          <Link to="/admin/delete-packages" className="btn">Delete Packages</Link>
        </div>

        <div className="box">
          <h3>User</h3>
          <Link to="/admin/view-users" className="btn">View User Accounts</Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

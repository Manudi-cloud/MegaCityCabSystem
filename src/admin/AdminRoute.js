import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "ADMIN" ? children : <Navigate to="/admin-login" />;
};

export default AdminRoute;


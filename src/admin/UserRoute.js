import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "USER" ? children : <Navigate to="/login" />;
};

export default UserRoute;

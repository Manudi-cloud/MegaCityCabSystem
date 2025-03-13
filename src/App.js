import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* User Login & Dashboard */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard" element={<UserRoute><UserDashboard /></UserRoute>} />

        {/* Admin Login & Dashboard */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

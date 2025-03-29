import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login"; // Hide Navbar on login page

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes future={{ v7_relativeSplatPath: true }}> {/* ✅ Enable future flag */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect unknown routes */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;
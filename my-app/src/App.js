import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import Leaderboard from "./components/Leaderboard";
import GetCertificatePage from "./pages/GetcertificatePage";
import JobOpportunity from "./pages/Jobopportunity";
import PlacementStats from "./pages/Placementstats";
import ViewRequest from "./pages/Viewrequest";
import Setting from "./pages/Setting";
import AddResourcePage from "./pages/AddResourcePage";
import FeedbackPage from "./pages/FeedbackPage";

// ✅ Protect routes by checking if user is logged in
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

// ✅ Hide Navbar only on Login Page
function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
        <Route path="/getcertificate" element={<PrivateRoute><GetCertificatePage /></PrivateRoute>} />
        <Route path="/jobopportunity" element={<PrivateRoute><JobOpportunity /></PrivateRoute>} />
        <Route path="/placementstats" element={<PrivateRoute><PlacementStats /></PrivateRoute>} />
        <Route path="/viewrequest" element={<PrivateRoute><ViewRequest /></PrivateRoute>} />
        <Route path="/setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
        <Route path="/add-resource" element={<PrivateRoute><AddResourcePage /></PrivateRoute>} />
        <Route path="/feedback-page" element={<PrivateRoute><FeedbackPage /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/home" />} />
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
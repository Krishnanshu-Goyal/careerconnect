import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import noti from "../images/notification.png";
import logoutIcon from "../images/logout.png";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login"; // Redirect to login page
  };

  return user ? (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="navbar-logo ms-auto">
          <img className="noti" src={noti} alt="Notification" />
          <img className="logout" src={logoutIcon} alt="Logout" onClick={handleLogout} style={{ cursor: "pointer" }} />
        </div>

        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Career Connect</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li><Link className="nav-link" to="/home">Home</Link></li>
              <li><Link className="nav-link" to="/leaderboard">LeaderBoard</Link></li>
              <li><Link className="nav-link" to="/viewrequest">View Request</Link></li>
              <li><Link className="nav-link" to="/getcertificate">Get Certificate</Link></li>
              <li><Link className="nav-link" to="/add-resource">Add Resources</Link></li>
              <li><Link className="nav-link" to="/feedback-page">Feedback Form</Link></li>
              <li><Link className="nav-link" to="/placementstats">Placement Stats</Link></li>
              <li><Link className="nav-link" to="/jobopportunity">Job Opportunity</Link></li>
              <li><Link className="nav-link" to="/setting">Settings</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  ) : null; // Hide Navbar when not logged in
}
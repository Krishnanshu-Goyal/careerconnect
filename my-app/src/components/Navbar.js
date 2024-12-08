import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler me-2" // Added "me-2" for spacing on the right
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="#">
            Offcanvas navbar
          </Link>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body p-1 ps-3">  
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 m-1">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Leaderboard">
                    LeaderBoard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/Viewrequest"
                  >
                    View Request
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Getcertificate">
                    Get Certificate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/add-resource"
                  >
                    Add Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/feedback-page"
                  >
                   Feedback Form
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/Placementstats"
                  >
                    Placement Stats 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Jobopportunity">
                    Job Opportunity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Setting">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
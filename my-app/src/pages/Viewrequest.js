import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Viewrequest = () => {
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState(null);
    const alumniId = "alumni123"; // Static alumni ID for demonstration

    // Fetch referral requests for the logged-in alumni
    const fetchRequests = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/requests/${alumniId}`);
            setRequests(response.data);
        } catch (err) {
            console.error("Error fetching requests:", err);
            setError("Failed to load requests. Please try again later.");
        }
    };
//
    // Update status of a referral request
    const handleStatusUpdate = async (requestId, status) => {
      try {
          await axios.post(
              `http://127.0.0.1:5000/api/requests/${requestId}`, // Correct URL
              { status }, // Correct payload
              { headers: { 'Content-Type': 'application/json' } } // Optional headers
          );
          fetchRequests(); // Refresh the list after updating the status
      } catch (err) {
          console.error("Error updating request status:", err);
          alert("Failed to update status.");
      }
  };
  

    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <div className="view-request-container">
            <h2>View Referral Requests</h2>
            {error && <p className="error-message">{error}</p>}

            {requests.length === 0 ? (
                <p>No requests found.</p>
            ) : (
                <div>
                    {requests.map((req) => (
                        <div key={req._id} className="request-card">
                            <p><strong>Student Name:</strong> {req.student_name}</p>
                            <p><strong>Request Message:</strong> {req.request_message}</p>
                            <p><strong>Status:</strong> {req.status}</p>
                            {req.status === "Pending" && (
                                <div className="action-buttons">
                                    <button
                                        className="accept-btn"
                                        onClick={() => handleStatusUpdate(req._id, "Accepted")}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="reject-btn"
                                        onClick={() => handleStatusUpdate(req._id, "Rejected")}
                                    >
                                        Reject
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Viewrequest;
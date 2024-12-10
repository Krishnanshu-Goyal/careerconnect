import '../styling/Getcertificate.css';
import React, { useState, useEffect } from 'react';
import { getCertificateData } from '../services/certificateService'; // If you have an API service
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation
import '../styling/Getcertificate.css';


function Getcertificate() {
    const [certificateData, setCertificateData] = useState(null);

    // Fetch certificate data (dynamic data from API or backend)
    useEffect(() => {
        async function fetchData() {
            const data = await getCertificateData(); // Assuming you have this service set up
            setCertificateData(data);
        }
        fetchData();
    }, []);

    // Handle the PDF download
    const downloadCertificate = () => {
        const doc = new jsPDF();

        // Customize PDF content as per your needs
        doc.text("Certificate of Completion", 20, 20);
        doc.text(`Name: ${certificateData?.name}`, 20, 30);
        doc.text(`Course: ${certificateData?.course}`, 20, 40);
        doc.text(`Date: ${certificateData?.date}`, 20, 50);

        // Save the generated PDF
        doc.save("certificate.pdf");
    };

    if (!certificateData) return <p>Loading...</p>;

    return (
        <div className="certificate-container">
            <div className="certificate-content">
                <h1>Your Certificate</h1>
                <div id="certificate">
                    <h2>{certificateData.name}</h2>
                    <p>{certificateData.course}</p>
                    <p>{certificateData.date}</p>
                </div>
                <button onClick={downloadCertificate}>Download as PDF</button>
            </div>
            <h2> shreya </h2>
        </div>
    );
}

export default Getcertificate;

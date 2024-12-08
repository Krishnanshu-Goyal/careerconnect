import React, { useState } from 'react';
import '../styling/ResourceForm.css'

const Jobopp = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    type: '',
    field: '',
    exp_level: '',
    link:'',
  });
  const [file, setFile] = useState(null); // to store the uploaded file
  const [responseMessage, setResponseMessage] = useState(''); // to show server response

  // Handle input changes for form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // store the first selected file
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to append the file with other form data
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('field', formData.field);
    formDataToSend.append('exp_level', formData.exp_level);
    formDataToSend.append('link', formData.link);

    try {
      // Send the form data to the backend
      const response = await fetch('http://127.0.0.1:5000/api/job-opportunities', {
        method: 'POST',
        body: formDataToSend, // Send FormData
      });

      // Handle the server's response
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        // Reset form after successful submission
        setFormData({
          title: '',
          company: '',
          type: '',
          field: '',
          exp_level: '',
          link:'',
        });
      } else {
        setResponseMessage('Failed to submit job opportunity.');
      }
    } catch (error) {
      console.error('Error submitting Job opportunity:', error);
      setResponseMessage('An error occurred while submitting the opportunity.');
    }
  };

  return (
    <div className='form'>
      <div className="form-header">
        <h1> Upload Job Opportunity</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Job role :</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Company:</label>
          <textarea
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Employment Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div>
          <label>Field:</label>
          <select
            name="field"
            value={formData.field}
            onChange={handleChange}
            required
          >
            <option value="">Select Field</option>
            <option value="IT/Software">IT/Software</option>
            <option value="Finance">Finance</option>
            <option value="Management">Management</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
          </select>
        </div>

        <div>
          <label>Experience Level:</label>
          <select
            name="exp_level"
            value={formData.exp_level}
            onChange={handleChange}
            required
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1-2 years">1-2 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="6+ years">6+ years</option>
          </select>
        </div>

        <div>
          <label>Link of the job :</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>


        <button type="submit">Submit</button>
      </form>

      {/* Display response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Jobopp;




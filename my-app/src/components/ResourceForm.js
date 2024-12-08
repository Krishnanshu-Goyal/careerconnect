import React, { useState } from 'react';
import '../styling/Form.css'

const ResourceForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    category: '',
    company: '',
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
    formDataToSend.append('description', formData.description);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('company', formData.company);

    if (file) {
      formDataToSend.append('file', file); // Add the file to formData
    }

    try {
      // Send the form data to the backend
      const response = await fetch('http://127.0.0.1:5000/api/resources', {
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
          description: '',
          type: '',
          category: '',
          company: '',
        });
        setFile(null);
      } else {
        setResponseMessage('Failed to submit resource.');
      }
    } catch (error) {
      console.error('Error submitting resource:', error);
      setResponseMessage('An error occurred while submitting the resource.');
    }
  };

  return (
    <div className='form'>
      <div className="form-header">
        <h1> Upload Resources</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title of the Resource:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Resource Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Study Material">Study Material</option>
            <option value="Practice Questions">Practice Questions</option>
            <option value="Mock Tests">Mock Tests</option>
            <option value="Video Tutorials">Video Tutorials</option>
            <option value="Notes/Guides">Notes/Guides</option>
          </select>
        </div>

        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Online Assessment">Online Assessment</option>
            <option value="Technical Interview">Technical Interview</option>
            <option value="HR Interview">HR Interview</option>
          </select>
        </div>

        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Upload Resource File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx, .mp4"
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

export default ResourceForm;
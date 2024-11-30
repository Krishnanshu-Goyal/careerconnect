// src/components/ResourceForm.js
import React, { useState } from 'react';

const ResourceForm = ({ formData, onChange, onSubmit }) => {
  const [file, setFile] = useState(null); // to store the uploaded file

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // store the first selected file
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Create a FormData object to append the file with other form data
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('file', file); // Add the file to formData

    // Submit the data to the backend
    onSubmit(formDataToSend);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={onChange} required />
      </div>

      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={onChange} required />
      </div>

      <div>
        <label>Type:</label>
        <select name="type" value={formData.type} onChange={onChange} required>
          <option value="">Select Type</option>
          <option value="PDF">PDF</option>
          <option value="Word">Word</option>
        </select>
      </div>

      <div>
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={onChange} required />
      </div>

      <div>
        <label>Company Name:</label>
        <input type="text" name="company" value={formData.company} onChange={onChange} required />
      </div>

      <div>
        <label>Upload Resource File (PDF/Word):</label>
        <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ResourceForm;

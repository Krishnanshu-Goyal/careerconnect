// src/components/AddResourcePage.js
import React, { useState } from 'react';
import ResourceForm from '../components/ResourceForm';

const AddResourcePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    link: '',
    category: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the backend via the resourceService (after backend setup)
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Add Resource</h2>
      <ResourceForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddResourcePage;

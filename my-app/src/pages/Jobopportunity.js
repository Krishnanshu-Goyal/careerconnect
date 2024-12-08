import React, { useState } from 'react';
import Jobopp from '../components/Jobopp.js';

const Jobopportunity = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    type: '',
    field: '',
    exp_level: '',
    link: '',
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
    console.log('Job opportunity submitted:', formData);
  };

  return (
    <div>
      <h2>Add Job Opportunity</h2>
      <Jobopp formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default Jobopportunity;

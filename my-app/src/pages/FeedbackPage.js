// src/components/AddResourcePage.js
import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    duration: '',
    satisfaction: '',
    culture: '',
    workLifeBalance: '',
    inclusive: '',
    colleagues: '',
    safety: '',
    grievances: '',
    overtime: '',
    remote: '',
    compensation: '',
    mobility: '',
    benefits: '',
    management: '',
    suggestions: '',
    recommendation: '',
    strengths: '',
    weakness: '',
    additionalAdvice: '',
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
      <FeedbackForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default FeedbackPage;

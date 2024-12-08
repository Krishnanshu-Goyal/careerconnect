import React, { useState } from "react";
//import "../styling/FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Feedback Submitted Successfully!");
      console.log(formData);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    const requiredFields = [
      "companyName",
      "duration",
      "satisfaction",
      "workCulture",
      "workLifeBalance",
      "recommendation",
    ];
    requiredFields.forEach((field) => {
      if (!data[field]) {
        errors[field] = "This field is required.";
      }
    });
    return errors;
  };

  return (
    <div className="container">
      <div className="form-header">
        <h1>Alumni Feedback Form</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="form-section">
          <label>What is the name of the company you are currently working for?</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            onChange={handleInputChange}
          />
          {errors.companyName && <span className="error">{errors.companyName}</span>}
        </div>

        {/* Work Duration */}
        <div className="form-section">
          <label>How long have you been working at this company?</label>
          <select name="duration" onChange={handleInputChange}>
            <option value="">Select duration</option>
            <option value="Less than 6 months">Less than 6 months</option>
            <option value="6 months - 1 year">6 months - 1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="More than 5 years">More than 5 years</option>
          </select>
          {errors.duration && <span className="error">{errors.duration}</span>}
        </div>

        {/* Satisfaction */}
        <div className="form-section">
          <label>On a scale of 1-5, how satisfied are you with your overall experience?</label>
          <input
            type="number"
            name="satisfaction"
            min="1"
            max="5"
            placeholder="Rate 1-5"
            onChange={handleInputChange}
          />
          {errors.satisfaction && <span className="error">{errors.satisfaction}</span>}
        </div>

        {/* Work Culture */}
        <div className="form-section">
          <label>How would you describe the work culture at this company?</label>
          <textarea
            name="workCulture"
            rows="3"
            placeholder="E.g., supportive, competitive, toxic, etc."
            onChange={handleInputChange}
          ></textarea>
          {errors.workCulture && <span className="error">{errors.workCulture}</span>}
        </div>

        {/* Work-Life Balance */}
        <div className="form-section">
          <label>How would you rate the work-life balance at this company?</label>
          <select name="workLifeBalance" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
          {errors.workLifeBalance && <span className="error">{errors.workLifeBalance}</span>}
        </div>

        {/* Recommendation */}
        <div className="form-section">
          <label>How likely are you to recommend this company to a fresher?</label>
          <select name="recommendation" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Highly likely">Highly likely</option>
            <option value="Likely">Likely</option>
            <option value="Neutral">Neutral</option>
            <option value="Unlikely">Unlikely</option>
          </select>
          {errors.recommendation && <span className="error">{errors.recommendation}</span>}
        </div>

        {/* Additional Feedback */}
        <div className="form-section">
          <label>Do you have any additional advice for freshers?</label>
          <textarea
            name="additionalAdvice"
            rows="4"
            placeholder="Share your thoughts..."
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
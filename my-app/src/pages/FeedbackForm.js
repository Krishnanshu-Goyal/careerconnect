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
            <option value="Toxic">Toxic</option>
            <option value="Average">Average</option>
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
          <select name="culture" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Supportive">Supportive</option>
            <option value="Average">Average</option>
            <option value="Competitive">Competitive</option>
            <option value="Toxic">Toxic</option>
          </select>
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


        {/* Inclusivity */}
        <div className="form-section">
          <label>How inclusive and diverse is the company’s work environment?</label>
          <select name="inclusive" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Highly Inclusive">Highly Inclusive</option>
            <option value="Moderately Inclusive">Moderately Inclusive</option>
            <option value="Needs Improvement">Needs Improvement</option>
          </select>
          {errors.inclusive && <span className="error">{errors.inclusive}</span>}
        </div>

        {/* colleagues */}
        <div className="form-section">
          <label>How approachable and supportive are your team members or colleagues?</label>
          <select name="colleagues" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Highly Supportive">Highly Supportive</option>
            <option value="Moderately Supportive">Moderately Supportive</option>
            <option value="Not very Supportive">Not very Supportive</option>
          </select>
          {errors.colleagues && <span className="error">{errors.colleagues}</span>}
        </div>

        {/* safety */}
        <div className="form-section">
          <label>How safe and comfortable is the workplace environment, both physically and mentally?</label>
          <select name="safety" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Very comfortable and safe">Very comfortable and safe</option>
            <option value="Somewhat comfortable">Somewhat comfortable</option>
            <option value="Needs improvement">Needs improvement</option>
          </select>
          {errors.safety && <span className="error">{errors.safety}</span>}
        </div>

        {/* grievances */}
        <div className="form-section">
          <label>Does the company have effective policies to address grievances, harassment, or workplace conflicts?</label>
          <select name="grievances" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No Idea">No Idea</option>
          </select>
          {errors.grievances && <span className="error">{errors.grievances}</span>}
        </div>


        {/* Overtime */}
        <div className="form-section">
          <label>Are you often required to work overtime or on weekends?</label>
          <select name="overtime" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Rarely">Rarely</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Frequently">Frequently</option>
          </select>
          {errors.overtime && <span className="error">{errors.overtime}</span>}
        </div>


        {/* remote */}
        <div className="form-section">
          <label>On a scale of 1-5, how flexible is the company in terms of remote work and time management?</label>
          <input
            type="number"
            name="remote"
            min="1"
            max="5"
            placeholder="Rate 1-5"
            onChange={handleInputChange}
          />
          {errors.remote && <span className="error">{errors.remote}</span>}
        </div>

        {/* compensation */}
        <div className="form-section">
          <label>Are you satisfied with the compensation package (salary, bonuses, and benefits) offered?</label>
          <select name="compensation" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.compensation && <span className="error">{errors.compensation}</span>}
        </div>

        {/* mobility */}
        <div className="form-section">
          <label>Is there scope for internal mobility (switching teams, departments, or roles)?</label>
          <select name="mobility" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.mobility && <span className="error">{errors.mobility}</span>}
        </div>

        {/* benefits */}
        <div className="form-section">
          <label>On a scale of 1-5, how would you rate the additional perks and benefits? (e.g., health insurance, wellness programs, paid time off)</label>
          <input
            type="number"
            name="benefits"
            min="1"
            max="5"
            placeholder="Rate 1-5"
            onChange={handleInputChange}
          />
          {errors.benefits && <span className="error">{errors.benefits}</span>}
        </div>

        {/* management */}
        <div className="form-section">
          <label>How would you rate the company’s leadership and management?</label>
          <select name="management" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
          {errors.management && <span className="error">{errors.management}</span>}
        </div>

        {/* suggestions */}
        <div className="form-section">
          <label>How open is the company to employee feedback and suggestions?</label>
          <select name="suggestions" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Very Open">Very Open</option>
            <option value="Somewhat Open">Somewhat Open</option>
            <option value="Not at all Open">Not at all Open</option>
          </select>
          {errors.suggestions && <span className="error">{errors.suggestions}</span>}
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

        {/* strengths */}
        <div className="form-section">
          <label>What are the company’s biggest strengths in your opinion?</label>
          <textarea
            name="strengths"
            rows="4"
            placeholder="Share your thoughts..."
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* weakness */}
        <div className="form-section">
          <label>What areas does the company need to improve on?</label>
          <textarea
            name="weakness"
            rows="4"
            placeholder="Share your thoughts..."
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* Additional Feedback */}
        <div className="form-section">
          <label>Do you have any additional advice for freshers considering this company?</label>
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
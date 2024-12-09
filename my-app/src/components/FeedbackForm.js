import React, { useState } from 'react';
import '../styling/Form.css'

const FeedbackForm = () => {
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

  const [file, setFile] = useState(null); // to store the uploaded file
  const [responseMessage, setResponseMessage] = useState(''); // to show server response

  // Handle input changes for form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to append the file with other form data
    const formDataToSend = new FormData();
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('duration', formData.duration);
    formDataToSend.append('satisfaction', formData.satisfaction);
    formDataToSend.append('culture', formData.culture);
    formDataToSend.append('workLifeBalance', formData.workLifeBalance);
    formDataToSend.append('inclusive', formData.inclusive);
    formDataToSend.append('colleagues', formData.colleagues);
    formDataToSend.append('safety', formData.safety);
    formDataToSend.append('grievances', formData.grievances);
    formDataToSend.append('overtime', formData.overtime);
    formDataToSend.append('remote', formData.remote);
    formDataToSend.append('compensation', formData.compensation);
    formDataToSend.append('mobility', formData.mobility);
    formDataToSend.append('benefits', formData.benefits);
    formDataToSend.append('management', formData.management);
    formDataToSend.append('suggestions', formData.suggestions);
    formDataToSend.append('recommendation', formData.recommendation);
    formDataToSend.append('strengths', formData.strengths);
    formDataToSend.append('weakness', formData.weakness);
    formDataToSend.append('additionalAdvice', formData.additionalAdvice);
    try {
      // Send the form data to the backend
      const response = await fetch('http://127.0.0.1:5000/api/feedback', {
        method: 'POST',
        body: formDataToSend, // Send FormData
      });

      // Handle the server's response
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        // Reset form after successful submission
        setFormData({
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
  
      } else {
        setResponseMessage('Failed to submit resource.');
      }
    } catch (error) {
      console.error('Error submitting resource:', error);
      setResponseMessage('An error occurred while submitting the resource.');
    }
  };

  return (
    <div className="form">
      <div className="form-header">
        <h1>Alumni Feedback Form</h1>
      </div>

      <form onSubmit={handleFormSubmit}>
        {/* Company Name */}
        <div>
          <label>What is the name of the company you are currently working for?</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            onChange={handleChange}
            required
          />
        </div>

        {/* Work Duration */}
        <div>
          <label>How long have you been working at this company?</label>
          <select name="duration" onChange={handleChange} required>
            <option value="">Select duration</option>
            <option value="Less than 6 months">Less than 6 months</option>
            <option value="6 months - 1 year">6 months - 1 year</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-5 years">2-5 years</option>
            <option value="More than 5 years">More than 5 years</option>
          </select>
        </div>

        {/* Satisfaction */}
        <div>
          <label>On a scale of 1-5, how satisfied are you with your overall experience?</label>
          <input
            type="number"
            name="satisfaction"
            min="1"
            max="5"
            placeholder="Rate 1-5"
            onChange={handleChange}
            required
          />
        </div>

        {/* Work Culture */}
        <div>
          <label>How would you describe the work culture at this company?</label>
          <select name="culture" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Supportive">Supportive</option>
            <option value="Average">Average</option>
            <option value="Competitive">Competitive</option>
            <option value="Toxic">Toxic</option>
          </select>
        </div>

        {/* Work-Life Balance */}
        <div>
          <label>How would you rate the work-life balance at this company?</label>
          <select name="workLifeBalance" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>


        {/* Inclusivity */}
        <div>
          <label>How inclusive and diverse is the company’s work environment?</label>
          <select name="inclusive" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Highly Inclusive">Highly Inclusive</option>
            <option value="Moderately Inclusive">Moderately Inclusive</option>
            <option value="Needs Improvement">Needs Improvement</option>
          </select>
        </div>

        {/* colleagues */}
        <div>
          <label>How approachable and supportive are your team members or colleagues?</label>
          <select name="colleagues" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Highly Supportive">Highly Supportive</option>
            <option value="Moderately Supportive">Moderately Supportive</option>
            <option value="Not very Supportive">Not very Supportive</option>
          </select>
        </div>

        {/* safety */}
        <div>
          <label>How safe and comfortable is the workplace environment, both physically and mentally?</label>
          <select name="safety" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Very comfortable and safe">Very comfortable and safe</option>
            <option value="Somewhat comfortable">Somewhat comfortable</option>
            <option value="Needs improvement">Needs improvement</option>
          </select>
        </div>

        {/* grievances */}
        <div>
          <label>Does the company have effective policies to address grievances, harassment, or workplace conflicts?</label>
          <select name="grievances" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No Idea">No Idea</option>
          </select>
        </div>


        {/* Overtime */}
        <div>
          <label>Are you often required to work overtime or on weekends?</label>
          <select name="overtime" onChange={handleChange}required>
            <option value="">Select</option>
            <option value="Rarely">Rarely</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Frequently">Frequently</option>
          </select>
        </div>


        {/* remote */}
        <div>
          <label>On a scale of 1-5, how flexible is the company in terms of remote work and time management?</label>
          <input
            type="number"
            name="remote"
            min="1"
            max="5"
            placeholder="Rate 1-5"
            onChange={handleChange}
            required
          />
        </div>

        {/* compensation */}
        <div>
          <label>Are you satisfied with the compensation package (salary, bonuses, and benefits) offered?</label>
          <select name="compensation" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* mobility */}
        <div>
          <label>Is there scope for internal mobility (switching teams, departments, or roles)?</label>
          <select name="mobility" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* benefits */}
        <div>
          <label>On a scale of 1-5, how would you rate the additional perks and benefits? (e.g., health insurance, wellness programs, paid time off)</label>
          <input
            type="number"
            name="benefits"
            min="1"
            max="5"
            placeholder="Rate 1-5"
            onChange={handleChange}
            required
          />
        </div>

        {/* management */}
        <div>
          <label>How would you rate the company’s leadership and management?</label>
          <select name="management" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>

        {/* suggestions */}
        <div>
          <label>How open is the company to employee feedback and suggestions?</label>
          <select name="suggestions" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Very Open">Very Open</option>
            <option value="Somewhat Open">Somewhat Open</option>
            <option value="Not at all Open">Not at all Open</option>
          </select>
        </div>

        {/* Recommendation */}
        <div>
          <label>How likely are you to recommend this company to a fresher?</label>
          <select name="recommendation" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Highly likely">Highly likely</option>
            <option value="Likely">Likely</option>
            <option value="Neutral">Neutral</option>
            <option value="Unlikely">Unlikely</option>
          </select>
        </div>

        {/* strengths */}
        <div>
          <label>What are the company’s biggest strengths in your opinion?</label>
          <textarea
            name="strengths"
            rows="4"
            placeholder="Share your thoughts..."
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* weakness */}
        <div>
          <label>What areas does the company need to improve on?</label>
          <textarea
            name="weakness"
            rows="4"
            placeholder="Share your thoughts..."
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Additional Feedback */}
        <div>
          <label>Do you have any additional advice for freshers considering this company?</label>
          <textarea
            name="additionalAdvice"
            rows="4"
            placeholder="Share your thoughts..."
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      {/* Display response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
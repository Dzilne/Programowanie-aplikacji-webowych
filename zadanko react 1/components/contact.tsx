import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    topic: '',
    agree: false,
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    topic: '',
    agree: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Invalid email address';
    }

    if (!formData.topic) {
      isValid = false;
      newErrors.topic = 'Please select a topic';
    }

    if (!formData.agree) {
      isValid = false;
      newErrors.agree = 'You must agree to process your personal data';
    }

    if (!formData.message || formData.message.length < 20) {
      isValid = false;
      newErrors.message = 'Message must be at least 20 characters long';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data:', formData);

      // Replace the form with a success message
      alert('Your message has been sent');
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label>Topic</label>
        <select name="topic" value={formData.topic} onChange={handleChange}>
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
        <div className="error">{errors.topic}</div>
      </div>

      <div>
        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
        <label>I agree to process my personal data</label>
        <div className="error">{errors.agree}</div>
      </div>

      <div>
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
        <div className="error">{errors.message}</div>
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
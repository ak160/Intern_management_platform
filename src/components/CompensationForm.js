// CompensationForm.js
import React, { useState } from 'react';
import { createCompensation } from '../api';

const CompensationForm = () => {
  const [formData, setFormData] = useState({ role: '', degree: '', monthly: '', annual: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCompensation(formData);
      // Optionally, refresh the list or give feedback
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
      <input
        type="text"
        placeholder="Degree"
        value={formData.degree}
        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
      />
      <input
        type="number"
        placeholder="Monthly"
        value={formData.monthly}
        onChange={(e) => setFormData({ ...formData, monthly: e.target.value })}
      />
      <input
        type="number"
        placeholder="Annual"
        value={formData.annual}
        onChange={(e) => setFormData({ ...formData, annual: e.target.value })}
      />
      <button type="submit">Add Compensation</button>
    </form>
  );
};

export default CompensationForm;

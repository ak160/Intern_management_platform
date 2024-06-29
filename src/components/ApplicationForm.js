// ApplicationForm.js
import React, { useState } from 'react';
import { createApplication } from '../api';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ position: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createApplication(formData);
      // Optionally, refresh the list or give feedback
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Position"
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
      />
      <button type="submit">Apply</button>
    </form>
  );
};

export default ApplicationForm;

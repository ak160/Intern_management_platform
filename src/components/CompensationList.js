// CompensationList.js
import React, { useEffect, useState } from 'react';
import { getCompensations } from '../api';

const CompensationList = () => {
  const [compensations, setCompensations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCompensations();
        setCompensations(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Compensation List</h2>
      <ul>
        {compensations.map((compensation) => (
          <li key={compensation._id}>
            {compensation.role} - {compensation.degree}: ₹{compensation.monthly}/month, ₹{compensation.annual}/year
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompensationList;

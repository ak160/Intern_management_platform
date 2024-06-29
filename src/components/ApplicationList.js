// ApplicationList.js
import React, { useEffect, useState } from 'react';
import { getApplications } from '../api';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getApplications();
        setApplications(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Application List</h2>
      <ul>
        {applications.map((application) => (
          <li key={application._id}>
            {application.position} - Status: {application.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;

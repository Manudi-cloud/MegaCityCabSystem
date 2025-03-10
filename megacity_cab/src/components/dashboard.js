import React, { useEffect, useState } from 'react';
import { getCustomers } from './services/api';

function Dashboard() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Customers List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;


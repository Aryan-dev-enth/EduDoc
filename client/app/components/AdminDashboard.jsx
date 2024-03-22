
import React from 'react';
import CardContainer from './CardContainer';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CardContainer isAdmin={true} />
    </div>
  );
};

export default AdminDashboard;

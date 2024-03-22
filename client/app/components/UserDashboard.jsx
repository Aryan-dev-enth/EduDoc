// UserDashboard.js
import React from 'react';
import CardContainer from './CardContainer';

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <CardContainer isAdmin={false} />
    </div>
  );
};

export default UserDashboard;


import React from 'react';
import CardContainer from './CardContainer';

const AdminDashboard = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='text-5xl'>Admin Dashboard</h1>
      <CardContainer isAdmin={true} />
    </div>
  );
};

export default AdminDashboard;

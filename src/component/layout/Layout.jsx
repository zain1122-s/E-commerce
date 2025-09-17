import React from 'react';
import Navbar from '../navbar/Navbar';
import './layout.css'; // Add this
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
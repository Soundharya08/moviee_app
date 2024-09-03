import React from 'react';

const MainApp = ({ onLogout }) => {
  const handleLogout = () => {
    // Perform any logout-related tasks if needed
    // For simplicity, just call the onLogout prop
    onLogout();
  };

  return (
    <div>
      <h2>Main Application</h2>
      <p>Welcome to the main application!</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default MainApp;

MainApp.js
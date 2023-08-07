// Header .js
import React from 'react';

const Header = ({ sticky }) => (
  <div
    style={{
      height: '100vh',
      backgroundColor: sticky ? '#f0f0f0' : '#fff', // Change the background color when sticky
      position: sticky ? 'fixed' : 'static',
      top: sticky ? 0 : 'auto',
      width: '100%',
      transition: 'background-color 0.5s ease',
    }}
  >
    {/* Your Header content goes here */}
    <h1>Header</h1>
  </div>
);

export default Header;

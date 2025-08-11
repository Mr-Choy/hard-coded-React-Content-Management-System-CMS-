import React from 'react';

const Navbar = ({ onNavigate }) => {
  return (
    <nav>
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('about')}>About</button>
      <button onClick={() => onNavigate('contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;

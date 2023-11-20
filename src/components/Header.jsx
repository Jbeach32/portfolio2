// Header.js
import React from 'react';
import Navigation from './Navigation';
import '../index.css';

const Header = () => {
    console.log(React);
  return (
    <header className='header'>
      <h1>Joshua Beach</h1>
      <Navigation />
    </header>
  );
};

export default Header;

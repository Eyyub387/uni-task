import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

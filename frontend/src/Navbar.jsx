import React, { useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === '/' ? 'home' : 'salary');

  const handleSetActive = (navItem) => {
    setActive(navItem);
  };

  return (
    <nav className="navbar">
      <h1 style={{fontStyle:"italic", textAlign:"center"}}>Attendance Page</h1>
    </nav>
  );
};

export default NavBar;

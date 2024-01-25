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
      <ul>
        <li>
          <Link  className={active === 'home' ? 'active' : ''} to="/" onClick={() => handleSetActive('home')}>Home</Link>
        </li>
        {/* <li >
          <Link to="/salary" className={active === 'salary' ? 'active' : ''} onClick={() => handleSetActive('salary')}>Salary Check</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation-bar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/todos" className="nav-link">
        Todos
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </nav>
  );
};

export default Navigation;

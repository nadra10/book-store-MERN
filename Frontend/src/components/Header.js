import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {

  return (
    <div>
      <div className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">
              THE BOOK STORE
            </div>
          </div>
          <div className="nav-links">
            <NavLink to='/' className="nav-link">Home</NavLink>
            <NavLink to='/add' className="nav-link">Add Book</NavLink>
            <NavLink to='/books' className="nav-link">All Books</NavLink>
            <NavLink to='/about' className="nav-link">About</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

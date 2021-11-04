import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className='navbar is-primary'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='container'>
        <div className='navbar-brand'>
          <a
            role='button'
            className={`navbar-burger burger ${isOpen && 'is-active'}`}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div className={`navbar-menu ${isOpen && 'is-active-menu'}`}>
          <div className='navbar-start'>
            <NavLink
              className='navbar-item'
              activeClassName='is-active'
              to='/home'
            >
              Home
            </NavLink>

            <NavLink
              className='navbar-item'
              activeClassName='is-active'
              to='/programming'
            >
              Programming
            </NavLink>

            <NavLink
              className='navbar-item'
              activeClassName='is-active'
              to='/about'
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

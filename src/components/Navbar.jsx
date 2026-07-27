import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Portfolio<span className="highlight">.</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
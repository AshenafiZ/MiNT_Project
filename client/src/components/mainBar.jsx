import React from 'react';
import { NavLink } from 'react-router-dom';
import './mainBar.css'; 

function MinisterNavbar() {
  return (
    <nav className="minister-navbar">
      <ul>
        <li>
          <NavLink to="/minister/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/minister/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/minister/reports" className={({ isActive }) => (isActive ? 'active' : '')}>
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/minister/policies" className={({ isActive }) => (isActive ? 'active' : '')}>
            Policies
          </NavLink>
        </li>
        <li>
          <NavLink to="/minister/meetings" className={({ isActive }) => (isActive ? 'active' : '')}>
            Meetings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MinisterNavbar;

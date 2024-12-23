import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/navigation.css';

// Configuration for navigation items based on roles
const navConfig = {
  main: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/login', label: 'Login' },
    { path: '/signup', label: 'Sign Up' },
  ],
  minister: [
    { path: '/minister/dashboard', label: 'Dashboard' },
    { path: '/minister/progress', label: 'Progress' },
    { path: '/minister/approvals', label: 'Approvals' },
  ],
  sector: [
    { path: '/sector/dashboard', label: 'Dashboard' },
    { path: '/sector/plans', label: 'Plans' },
    { path: '/sector/tasks', label: 'Tasks' },
  ],
  office: [
    { path: '/office/dashboard', label: 'Dashboard' },
    { path: '/office/monitor', label: 'Monitor' },
    { path: '/office/progress', label: 'Progress' },
  ],
  strategy: [
    { path: '/strategy/dashboard', label: 'Dashboard' },
    { path: '/strategy/compile', label: 'Compile KPAs' },
    { path: '/strategy/submit', label: 'Submit to Minister' },
  ],
  admin: [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/sectors', label: 'Manage Sectors' },
    { path: '/admin/offices', label: 'Manage Offices' },
    { path: '/admin/users', label: 'Manage Users' },
  ],
};

function Navigation({ role = 'main', profilePhoto }) {
  const navItems = navConfig[role] || []; // Fetch navigation items based on the role

  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <div className="profile">
          <img src={profilePhoto || '/default-avatar.png'} alt="Profile" className="profile-photo" />
          <div className="profile-dropdown">
            <Link to={`/${role}/profile`}>Profile</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;



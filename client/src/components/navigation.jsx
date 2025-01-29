import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/components/navigation.css';

const navConfig = {
  main: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/login', label: 'Login' },
    { path: '/signup', label: 'Sign Up' },
  ],
  minister: [
    { path: '/minister', label: 'Home' },
    { path: '/minister/goals', label: 'Goals' },
    { path: '/minister/kpas', label: 'KPAs' },
    { path: '/minister/newkpas', label: 'New kPAs' },
    { path: '/minister/progress', label: 'Progress' },
    { path: '/minister/approvals', label: 'Approvals' },
  ],
  sector: [
    { path: '/sector', label: 'Home' },
    { path: '/sector/goals', label: 'Goals' },
    { path: '/sector/kpas', label: 'KPAs' },
    { path: '/sector/kpis', label: 'KPIs' },
    { path: '/sector/tasks', label: 'Tasks' },
  ],
  office: [
    { path: '/office', label: 'Dashboard' },
    { path: '/office/monitor', label: 'Monitor' },
    { path: '/office/kpis', label: 'KPIs' },
    { path: '/office/progress', label: 'Progress' },
  ],
  strategy: [
    { path: '/strategy/', label: 'Home' },
    { path: '/strategy/goals', label: 'Goals' },
    { path: '/strategy/progress', label: 'Progress' },
    { path: '/strategy/plan', label: 'Add Plans' },
    { path: '/strategy/monitor', label: 'Compile KPAs' },
  ],
  admin: [
    { path: '/admin', label: 'Home' },
    { path: '/admin/sectors', label: 'Manage Sectors' },
    { path: '/admin/offices', label: 'Manage Offices' },
    { path: '/admin/users', label: 'Manage Users' },
  ],
};

function Navigation({ role = 'main', profilePhoto }) {
  const location = useLocation();
  const navItems = navConfig[role] || []; 

  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        {role !== 'main' && (
          <div className="profile">
            <img src={profilePhoto || '/default-avatar.png'} alt="Profile" className="profile-photo" />
            <div className="profile-dropdown ">
              <Link to={`/${role}/profile`}>Profile</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

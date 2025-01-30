// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../style/components/navigation.css';

// const navConfig = {
//   main: [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About Us' },
//     { path: '/contact', label: 'Contact Us' },
//     { path: '/login', label: 'Login' },
//     { path: '/signup', label: 'Sign Up' },
//   ],
//   minister: [
//     { path: '/minister', label: 'Home' },
//     { path: '/minister/goals', label: 'Goals' },
//     { path: '/minister/kpas', label: 'KPAs' },
//     { path: '/minister/newkpas', label: 'New kPAs' },
//     { path: '/minister/progress', label: 'Progress' },
//     { path: '/minister/approvals', label: 'Approvals' },
//   ],
//   sector: [
//     { path: '/sector', label: 'Home' },
//     { path: '/sector/goals', label: 'Goals' },
//     { path: '/sector/kpas', label: 'KPAs' },
//     { path: '/sector/kpis', label: 'KPIs' },
//     { path: '/sector/tasks', label: 'Tasks' },
//   ],
//   office: [
//     { path: '/office', label: 'Dashboard' },
//     { path: '/office/monitor', label: 'Monitor' },
//     { path: '/office/kpis', label: 'KPIs' },
//     { path: '/office/progress', label: 'Progress' },
//   ],
//   strategy: [
//     { path: '/strategy/', label: 'Home' },
//     { path: '/strategy/goals', label: 'Goals' },
//     { path: '/strategy/progress', label: 'Progress' },
//     { path: '/strategy/plan', label: 'Add Plans' },
//     { path: '/strategy/monitor', label: 'Compile KPAs' },
//   ],
//   admin: [
//     { path: '/admin', label: 'Home' },
//     { path: '/admin/sectors', label: 'Manage Sectors' },
//     { path: '/admin/offices', label: 'Manage Offices' },
//     { path: '/admin/users', label: 'Manage Users' },
//   ],
// };

// function Navigation({ role = 'main', profilePhoto }) {
//   const location = useLocation();
//   const navItems = navConfig[role] || []; 

//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <ul className="nav-list">
//           {navItems.map((item) => (
//             <li key={item.path}>
//               <Link 
//                 to={item.path} 
//                 className={location.pathname === item.path ? 'active' : ''}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="nav-right">
//         {role !== 'main' && (
//           <div className="profile">
//             <img src={profilePhoto || '/default-avatar.png'} alt="Profile" className="profile-photo" />
//             <div className="profile-dropdown ">
//               <Link to={`/${role}/profile`}>Profile</Link>
//               <Link to="/logout">Logout</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navigation;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons
import clsx from "clsx";

const navConfig = {
  main: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Sign Up" },
  ],
  minister: [
    { path: "/minister", label: "Home" },
    { path: "/minister/goals", label: "Goals" },
    { path: "/minister/kpas", label: "KPAs" },
    { path: "/minister/newkpas", label: "New KPAs" },
    { path: "/minister/progress", label: "Progress" },
    { path: "/minister/approvals", label: "Approvals" },
  ],
  sector: [
    { path: "/sector", label: "Home" },
    { path: "/sector/goals", label: "Goals" },
    { path: "/sector/kpas", label: "KPAs" },
    { path: "/sector/kpis", label: "KPIs" },
    { path: "/sector/tasks", label: "Tasks" },
  ],
  office: [
    { path: "/office", label: "Dashboard" },
    { path: "/office/monitor", label: "Monitor" },
    { path: "/office/kpis", label: "KPIs" },
    { path: "/office/progress", label: "Progress" },
  ],
  strategy: [
    { path: "/strategy", label: "Home" },
    { path: "/strategy/goals", label: "Goals" },
    { path: "/strategy/progress", label: "Progress" },
    { path: "/strategy/plan", label: "Add Plans" },
    { path: "/strategy/monitor", label: "Compile KPAs" },
  ],
  admin: [
    { path: "/admin", label: "Home" },
    { path: "/admin/sectors", label: "Manage Sectors" },
    { path: "/admin/offices", label: "Manage Offices" },
    { path: "/admin/users", label: "Manage Users" },
  ],
};

function Navigation({ role = "main", profilePhoto }) {
  const location = useLocation();
  const navItems = navConfig[role] || [];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-semibold">
          MyApp
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={clsx(
                  "px-3 py-2 rounded hover:bg-blue-700 transition",
                  location.pathname === item.path && "bg-blue-800 underline decoration-2 text-orange-400 decoration-orange-400"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile Section */}
        {role !== "main" && (
          <div className="hidden md:flex items-center space-x-4">
            <img
              src={profilePhoto || "/default-avatar.png"}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="relative group">
              <button className="focus:outline-none">Profile ▼</button>
              <div className="absolute right-0 mt-0 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block">
                <Link to={`/${role}/profile`} className="block px-4 py-2 hover:bg-gray-200">
                  Profile
                </Link>
                <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-700 ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-center space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={clsx(
                  "block px-4 py-2 rounded hover:bg-blue-800 transition",
                  location.pathname === item.path && "bg-blue-900"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Profile Section */}
        {role !== "main" && (
          <div className="flex flex-col items-center p-4">
            <img
              src={profilePhoto || "/default-avatar.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <Link
              to={`/${role}/profile`}
              className="block px-4 py-2 mt-2 hover:bg-blue-800 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 hover:bg-blue-800 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

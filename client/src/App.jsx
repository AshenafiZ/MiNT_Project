import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Plans from './pages/Plans';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white py-4 px-6">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/plans" className="hover:underline">Plans</Link>
            </li>
          </ul>
        </nav>

        {/* Page Routes */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
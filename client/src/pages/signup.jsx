import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/pages/signup.css';

function Signup (){
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    role: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [roles, setRoles] = useState([])

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.post('/api/user/roles'); 
        setRoles(response.data.roles); 
      } catch (err) {
        setError('Error fetching roles');
      }
    };

    fetchRoles();
  }, [])


  const handleChange = (e) => {
    setError(null)
    setSuccess(null)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setError(null);
        setFormData("")
        Navigate('/login')
        
      } else {
        setError(data.message);
        setSuccess(null);
      }
    } catch (error) {
      setError('Something went wrong!');
      setSuccess(null);
    }
  };


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>} 
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/pages/signup.css';

function Signup (){
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    profilePhoto:null,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [roles, setRoles] = useState([])

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('/api/user/roles'); 
        setRoles(response.data); 
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
  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signupData = new FormData();
      signupData.append('firstname', formData.firstname);
      signupData.append('lastname', formData.lastname);
      signupData.append('email', formData.email);
      signupData.append('phone', formData.phone);
      signupData.append('role', formData.role);
      signupData.append('password', formData.password);
      if (formData.profilePhoto) {
        signupData.append('profilePhoto', formData.profilePhoto);
      }

      const response = await axios.post('/api/user/signup', signupData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess(response.data.message);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        role: '',
        password: '',
        profilePhoto: null,
      });
      navigate('/login');
    } catch (err) {
      console.error('Error signing up:', err);
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };


  return (
    <div className="signup-container">
      <h2 className='sh2'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className='slabel' htmlFor="first_name">First Name:</label>
          <input className='sinput'
            type="text"
            id="first_name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label className='slabel' htmlFor="last_name">Last Name:</label>
          <input className='sinput'
            type="text"
            id="last_name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label className='slabel' htmlFor="email">Email:</label>
          <input className='sinput'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label className='slabel' htmlFor="phone">Phone:</label>
          <input className='sinput'
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-group'>
          <label className='slabel' htmlFor='profilePhoto'>Profile Photo:</label>
          <input type="file" id='profilePhoto' name="profilePhoto" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="input-group">
          <label className='slabel' htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
          
            <option value="">Select a role</option>
            {roles?.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label className='slabel' htmlFor="password">Password:</label>
          <input className='sinput'
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
        <button className='sbutton' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

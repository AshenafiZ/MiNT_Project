import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

import '../style/pages/login.css';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { loginUser } = useUser();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/user/login', { email, password }, { withCredentials: true});
            loginUser(response.data);
            if (response.data.success) {
                const { role} = response.data;
                if (role === 'admin') navigate('/admin');
                else if (role === 'minister') navigate('/minister');
                else if (role === 'sector') navigate('/sector');
                else if (role === 'office') navigate('/office');
                else if (role === 'strategy') navigate('/strategy');
                else navigate('/');
            } else {
                setError(response.data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Error logging in:', err.response);
            alert(err.response.data.message || 'LOGIN FAILED HAILE');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

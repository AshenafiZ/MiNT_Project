import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/pages/login.css';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/user/login', { email, password });

            if (response.data.success) {
                const { role , token} = response.data;
                localStorage.setItem('token', token)
                if (role === 'admin') navigate('/admin');
                else if (role === 'minister') navigate('/minister');
                else if (role === 'sector') navigate('/sector');
                else if (role === 'office') navigate('/office');
                else if (role === 'strategy') navigate('/strategy');
                else navigate('/');
            } else {
                console.log(response.data);
                setError(response.data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please check your credentials and try again.');
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

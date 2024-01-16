import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [employeeTypes, setEmployeeTypes] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const apiUrl = 'http://localhost:3001/user/login';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:3000',
                },
                body: JSON.stringify({
                    username,
                    password,
                    employeeTypes
                }),
            })
            if (response.ok) {
                console.log('Login successful');
                navigate('/home');

            }
            else {
                const responseData = await response.json();
                if (responseData.message) {
                    console.error(`Login failed: ${responseData.message}`);
                } else {
                    console.error('Login failed. Please try again later.');
                }
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    }
    return (
        <div className="container">
            <h1 className='heading'>Login</h1>
            <form className='loginForm'>
                <label className='userText'>Username:<input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </label>
                <label className='userText'>Password:<input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <label className='userText'>employeeTypes:<input
                    type="text"
                    value={employeeTypes}
                    onChange={(e) => setEmployeeTypes(e.target.value)}
                />
                </label>
                <button type="button" className='submitButton' onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;

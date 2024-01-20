
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
const envFile = `${process.env.REACT_APP_apiURL}`
const urlFile = `${process.env.REACT_APP_employeeSignUpURL}`

type loginData = {
    username: string;
    password: string;
    employeeTypes: string;
}
const LoginPage = () => {
    const [formData, setFormData] = useState<loginData>({
        username: '',
        password: '',
        employeeTypes: ''
    })
    const navigate = useNavigate();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleLogin = async () => {
        try {
            const response = await fetch(envFile, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    urlFile,
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                console.log('Login successful');
                navigate('/home');

            }
            else {
                const responseData = await response.json();
                if (responseData.message) {
                    console.error('Login failed: ');
                } else {
                    console.error('Login failed. Please try again later.');
                }
            }
        } catch (err) {
            console.error('Error during login:', err);
        }
    }
    return (
        <div className="container">
            <h1 className='heading'>Login</h1>
            <form className='loginForm'>
                <label className='userText'>Username:<input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleInputChange(e)}
                />
                </label>
                <label className='userText'>Password:<input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange(e)}
                />
                </label>
                <label className='userText'>employeeTypes:<input
                    type="text"
                    name="employeeTypes"
                    value={formData.employeeTypes}
                    onChange={(e) => handleInputChange(e)}
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

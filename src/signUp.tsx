import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.css';

const UserSignUpPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [user_type, setUser_type] = useState('');
    const navigate = useNavigate();


    const handleRegistration = async () => {
        const apiUrl = 'http://localhost:3001/user/signup';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:3000',

                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                    age,
                    gender,
                    phone,
                    bloodGroup,
                    user_type
                }),
            })
            if (response.ok) {
                console.log('Registration successful');
                navigate('/login');

            }
            else {
                const responseData = await response.json();
                if (responseData.message) {
                    console.error(`Registration failed: ${responseData.message}`);
                } else {
                    console.error('Registration failed. Please try again later.');
                }
            }
        } catch (err) {
            console.error('Error during Registration:', err)
        }
    }
    return (
        <div className="container">
            <h1 className='heading'>Registration</h1>
            <form className='RegistrationForm'>
                <label className='userText'>Name:<input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
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
                <label className='userText'>Age:<input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                </label>
                <label className='userText'>
                    <h5 className='gender'>Gender:</h5>
                    <div className="genderOptions">
                        <label className='options'><input
                            className='radioButton'
                            type="radio"
                            value="Male"
                            checked={gender === 'Male'}
                            onChange={() => setGender('Male')}
                        />Male</label>
                        <label className='options'><input
                            className='radioButton'
                            type="radio"
                            value="Female"
                            checked={gender === 'Female'}
                            onChange={() => setGender('Female')}
                        />Female</label>
                        <label className='options'><input
                            className='radioButton'
                            type="radio"
                            value="Other"
                            checked={gender === 'Other'}
                            onChange={() => setGender('Other')}
                        />Other</label>
                    </div>
                </label>
                <label className='userText'>Phone:<input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </label>
                <label className='userText'>BloodGroup:<input
                    type="text"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                />
                </label>
                <br></br><br></br>
                <div className='userType'>
                    <h4 className='UserTypes'> userTypes:</h4>
                    <label className='user_type'>
                        <select className='selectUserType' value={user_type} onChange={(e) => setUser_type(e.target.value)}>
                            <option value="">UserType</option>
                            <option value="patient">patient</option>
                            <option value="doctor">doctor</option>
                        </select>
                    </label>
                </div>
                <br></br><br></br>
                <button type="button" className='submitButton' onClick={handleRegistration}>
                    Register
                </button>
            </form>
        </div>
    )
}

export default UserSignUpPage;

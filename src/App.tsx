
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './login/loginForm';
import UserSignUpPage from './signUp/signUp';
import HomePage from './login/homePage';
import EmployeeSignUpPage from './signUp/employeeSignUp';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/userSignUp" element={<UserSignUpPage />} />
        <Route path="/employeeSignUp" element={<EmployeeSignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

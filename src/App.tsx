
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import LoginPage from './loginForm';
import UserSignUpPage from './signUp';
import HomePage from './homePage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<UserSignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

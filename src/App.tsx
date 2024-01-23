
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './login/loginForm';
import UserSignUpPage from './signUp/signUp';
import HomePage from './login/homePage';
import EmployeeSignUpPage from './signUp/employeeSignUp';
import UserHomePage from './user/userHomePage';
import AppointmentBooking from './user/appointmentBooking';
import DoctorHome from './doctor/doctorHome';
import AddPrescription from './doctor/addPrescription';
import ConfirmAppointment from './doctor/confirmAppointment';
import UpdateAppointmentLimit from './doctor/updateAppointmentLimit';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/userSignUp" element={<UserSignUpPage />} />
        <Route path="/employeeSignUp" element={<EmployeeSignUpPage />} />
        <Route path="/userHomePage" element={<UserHomePage />} />
        <Route path="/appointmentBooking" element={<AppointmentBooking />} />
        <Route path="/doctorHome" element={<DoctorHome />} />
        <Route path="/addPrescription" element={<AddPrescription />} />
        <Route path="/confirmAppointment" element={<ConfirmAppointment />} />
        <Route path="/confirmAppointment" element={<UpdateAppointmentLimit />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;

import React,{useEffect} from 'react';
import './pharmacyHome.css';
import { Link,useNavigate } from 'react-router-dom';
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'

const DoctorHome = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.setItem('token', '')
        navigate('/')
    };
    useEffect(()=>{
         const doctorToken =  localStorage.getItem('token')
         console.log('token', doctorToken);
          if(!doctorToken) {
             navigate('/login')
      }
        })
    return (
        <body className='doctorhomePageBody'>
            <div className="mainContainer">
                <header className="mainHeader">
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/viewMedicines" className="NavigationLink">
                            Medicines
                        </Link>
                        <Link to="/viewLowStockMedicines" className="NavigationLink">
                            Low Stock Medicines
                        </Link>
                        <Link to="/viewExpiringMedicines" className="NavigationLink">
                            Expiring Medicines List
                        </Link>
                        <Link to="/addMedicinesData" className="NavigationLink">
                           Medicine Data
                        </Link>
                        <button className="logoutButton" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </header>
                <div className="clinicContainer">
                    <About></About>
                    <div className="imageContainer">
                        <img src="https://i.pinimg.com/564x/0c/1c/1a/0c1c1af72ca90df75be865789bfa26d2.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
                <div className='specialities'>
                    <h2 className='specialitiesHeading'>Next Level Dentistry</h2>
                    <h3 className='specialitiesText'>Everything you need for exceptional oral health, all under our roof.</h3>
                </div>
                <footer> </footer>
            </div>
        </body>
    )
}
export default DoctorHome;

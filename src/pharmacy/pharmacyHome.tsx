import React,{useEffect} from 'react';
import './pharmacyHome.css';
import { Link,useNavigate } from 'react-router-dom';
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'
import Footer from '../components/footer'

const PharmacyHome = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.setItem('token', '')
        navigate('/login')
    };
    useEffect(()=>{
         const PharmacyToken =  localStorage.getItem('token')
         console.log('token', PharmacyToken);
          if(!PharmacyToken) {
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
                <Footer></Footer>
                <div className="widget">Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>
            </div>
        </body>
    )
}
export default PharmacyHome;

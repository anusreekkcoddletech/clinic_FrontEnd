import React from 'react';
import { Link } from 'react-router-dom';
import './userHomePage.css';
import HomePageHeader from '../components/homeHeader'
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'


const UserHome = () => {
    return (
        <body className='userHomePageBody'>
            <div className="userMainContainer">
                <header className="mainHeader">
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/home" className="navigationLink">
                            Home
                        </Link>
                        <Link to="/appointmentBooking" className="navigationLink">
                            Book an appointment
                        </Link>
                    </div>
                </header>
                <HomePageHeader></HomePageHeader>
                <div className='coverImage'>
                    <h1 className='coverHeading'>Why choose us</h1>
                    <p className='coverText'>Explore what makes us the best dentist in Kerala</p>
                </div>
                <div className="clinicContainer">
                    <About></About>
                    <div className="imageContainer">
                        <img src="https://i.pinimg.com/originals/f2/ef/37/f2ef37d34b5847b4afbbeb8d3e79474a.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
                <div className="widget">
                    Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>
            </div>
        </body>
    )
}


export default UserHome;

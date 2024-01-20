import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
    return (
        <body>
            <div className="mainContainer">
                <header className="mainHeader">
                  
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="navigationLinks">
                        <Link to="/login" className="navigationLink">
                            Login
                        </Link>
                        <Link to="/userSignUp" className="navigationLink">
                            Sign Up
                        </Link>
                    </div>
                </header>
                <div className="clinicContainer">
                    <div className="textContainer">
                        <h2 className="sectionHeading">About Us</h2>
                        <p className="clinicDescription">Welcome to <b>Narayana Speciality Dental Care</b>located in Palakkad Town, Kerala, India ! Your quest for the ultimate dental 
                        care is over! Fully equipped with modern medical equipments and machines, Oral
                         and Maxillofacial treatments. In addition to routine dental procedures we under
                          take specialised procedures including dental implants..
                        </p>
                    </div>
                    <div className="imageContainer">
                        <img src="https://i.pinimg.com/564x/54/d0/ca/54d0cacc2f0de40e998774ba43e12504.jpg" alt="Clinic Image 1" />
                    </div>
                </div>
                <div className="additionalFeatures">
                <div className='fecilities'>
                <h2 className="sectionHeading">Our Facilities</h2>
                        <ul className="facilityList">
                            <li>24X7 Care</li>
                            <li>Quality Treatments</li>
                            <li>Latest Technology</li>
                            <li>Excellent Services</li>
                        </ul>
                        </div>
                        <div className='fecilities'>

                    <h2 className="sectionHeading">Expertise </h2>
                        <ul className="expertiseList">
                            <li>Faciomaxillary Surgeries</li>
                            <li>Dental crowns and bridges</li>
                            <li>All kind of dental related treatments.</li>
                            <li>All kind of minor oral surgical procedures</li>
                            <li>Dental implants & Dental Braces</li>
                            <li>ARoot canal treatment</li>
                            <li>Cosmetic dentistry</li>
                        </ul>
                        </div>
                </div>
                        <div className="widget">
                            Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>
                    </div>
        </body>
    )
}

export default HomePage;

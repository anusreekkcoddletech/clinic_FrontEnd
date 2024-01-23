import React from 'react';
import './doctorHome.css';
import HomePageHeader from '../components/homeHeader'
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'

const DoctorHome = () => {
    return (
        <body className='doctorhomePageBody'>
            <div className="mainContainer">
               <HomePageHeader></HomePageHeader>
                <div className="clinicContainer">
                   <About></About>
                    <div className="imageContainer">
                        <img src="https://i.pinimg.com/564x/f9/c2/9b/f9c29b810bfcc5721dd1920a5eddc686.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
                <div className="widget">Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>
            </div>
        </body>
    )
}
export default DoctorHome;

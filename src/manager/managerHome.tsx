import React,{ useEffect } from 'react';
import './managerhome.css';
import { Link,useNavigate } from 'react-router-dom';
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'

const ManagerHome = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.setItem('token', '')
        navigate('/')
    };
    useEffect(()=>{
         const managerToken =  localStorage.getItem('token')
         console.log('token', managerToken);
          if(!managerToken) {
             navigate('/login')
      }
        })
    return (
        <body className='managerhomePageBody'>
            <div className="mainContainer">
                <header className="mainHeader">
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/home" className="navigationLink">
                            Home
                        </Link>
                        <Link to="/addWorkSchedule" className="navigationLink">
                            Add WorkSchedule
                        </Link>
                        <button className="logoutButton" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </header>
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
export default ManagerHome;

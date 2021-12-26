import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faAd, faCalendar, faCog, faFileAlt, faGripHorizontal, faSignOutAlt, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { ContextUser } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ContextUser)
    const [isDoctor, setIsDoctor] = useState(false)


    useEffect(() => {
        fetch('https://calm-waters-50495.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))

    }, [])
    return (
        <div className='sidebar d-flex flex-column justify-content-between '>
            <ul className='list-unstyled mt-5' >
                <li>
                    <Link className='text-whit' to="/dashboard">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
               
                {isDoctor && <div>
                    <li>
                        <Link to="/dashboard">
                            <FontAwesomeIcon icon={faCalendar} /><span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/allpatients">
                            <FontAwesomeIcon icon={faUsers} /><span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/prescription">
                            <FontAwesomeIcon icon={faFileAlt} /><span>Prescription</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addDoctor">
                            <FontAwesomeIcon icon={faUserPlus} /><span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting">
                            <FontAwesomeIcon icon={faCog} /><span>Setting</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div style={{ marginTop: '250px' }}>
                <Link className='text-white' to='/'>
                    <FontAwesomeIcon icon={faSignOutAlt} /><span>Log Out</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
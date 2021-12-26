import React, { useContext, useEffect, useState } from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ContextUser } from '../../../App';



const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
    padding:'50px'
}
const Dashboard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(ContextUser)
    const [appointments, setAppointments] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)

    }

    useEffect(() => {
        fetch('https://calm-waters-50495.herokuapp.com/appointmentList', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date:selectedDate , email:loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-4 shadow  ">
                        <h1 className='text-center text-brand'>Calender</h1>
                        <Calendar className="p-5 m-4  "
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-5 shadow  ms-5 ps-5">
                        <AppointmentList date={selectedDate} appointments={appointments}></AppointmentList>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
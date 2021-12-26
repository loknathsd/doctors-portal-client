import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    const handleDateChange = date =>{
        setSelectedDate(date)
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <AvailableAppointment date={selectedDate}></AvailableAppointment>

        </div>
    );
};

export default Appointment;
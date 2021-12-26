import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentList = ({ appointments, date }) => {
    return (
        <div>
            <div className='d-flex'>
                <h4 className='text-brand  mb-4'>appointments : {appointments.length}</h4>
                <p style={{marginLeft:'150px',marginTop:'10px'}}>{date.toDateString()}</p>
            </div>
            {
                appointments.length ? <AppointmentShortList appointments={appointments}></AppointmentShortList>
                    :
                    <div className='p-5' >
                        <h4 className='lead text-center'>No Appointments for this date</h4>
                    </div>

            }
        </div>
    );
};

export default AppointmentList;
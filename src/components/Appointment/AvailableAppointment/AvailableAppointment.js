import React from 'react';
import Booking from '../Booking/Booking';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitHour: '10:05 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitHour: '5:00 PM - 6:30 PM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitHour: '7:00 PM - 8:30 PM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]


const AvailableAppointment = ({ date }) => {
    return (
        <section>
            <h1 className='text-center text-brand '>Available appointments on {date.toDateString()} </h1>
            <div className="container">
                <div className="row mt-5">
                    {
                        bookingData.map(booking => <Booking date={date} booking={booking}></Booking>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AvailableAppointment;
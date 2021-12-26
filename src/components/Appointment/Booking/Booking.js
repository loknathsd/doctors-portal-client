import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const Booking = ({booking,date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 my-3">
            <div className="card text-center">
                <div className="card-body">
                    <h4 className='card-title text-brand'>{booking.subject}</h4>
                    <h6>{booking.visitHour}</h6>
                    <small className='text muted'>{booking.totalSpace} SPACES AVAILABLE </small>
                    <button onClick={openModal} className='btn btn-brand text-uppercase text-white mt-3'>booking appointment</button>
                    <AppointmentForm date={date} bookingSub={booking.subject} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default Booking;
import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
       <section className="make-appointment my-5 pb-5">
           <div className="container">
               <div className="row ">
                   <div className="col-md-5 d-none d-md-block">
                       <img src={doctor} alt="" />
                   </div>
                   <div className="col-md-6 py-5 text-white ">
                       <h4 style={{color: '#12D0D6'}}>APPOINTMENT</h4>
                       <h2 className='my-4'>Make an appointment <br /> Today</h2>
                       <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a pages when looking at its</p>
                       <button className="btn btn-primary">Learn more</button>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default MakeAppointment;
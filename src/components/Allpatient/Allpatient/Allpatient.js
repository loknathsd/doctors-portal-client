import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Patients from '../Patients/Patients';

const Allpatient = () => {
      const [appointments,setAppointments]=useState()

    useEffect(()=>{
        fetch('https://calm-waters-50495.herokuapp.com/appointments')
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[])
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{background:'#F4FDFB', position:'absolute',right:0}}>
               <h4 className='text-brand'>All Patients</h4>
               <Patients appointments={appointments}></Patients>

            </div>
        </div>
    );
};

export default Allpatient;
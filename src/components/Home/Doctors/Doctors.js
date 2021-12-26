import React,{useState,useEffect} from 'react';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import doctor from '../../../images/doctor-small.png'
import Doctor from '../Doctor/Doctor';



// const doctorsInfo = [
//     {
//         name: 'Dr. Caudi',
//         // img: doctor,
//         phone: '+61452200126',
//         icon: faPhoneAlt
//     },
//     {
//         name: 'Dr. Robert',
//         // img: doctor,
//         phone: '+61452200126',
//         icon: faPhoneAlt
//     },
//     {
//         name: 'Dr. jackson',
//         // img: doctor,
//         phone: '+61452200126',
//         icon: faPhoneAlt
//     }
// ]

const Doctors = () => {
    const [doctors,setDoctors]=useState([])

    useEffect(()=>{
            fetch('https://calm-waters-50495.herokuapp.com/doctors')
            .then(res =>res.json())
            .then(data =>setDoctors(data))
    },[])
    return (
        <section className='my-5 py-5'>
            <div className="container">
                <h4 className='text-center text-info pb-5'>Our Doctors</h4>
                <div className='row' >
                    {
                        doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;
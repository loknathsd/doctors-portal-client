import React from 'react';
import chair from '../../../images/chair.png'
import { useHistory } from "react-router-dom";

const HeaderMain = () => {
       const history = useHistory();
    const handleGetAppointment=()=>{
            history.push('/appointment')
    }
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center' >
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium nostrum consequatur nobis, et perspiciatis.</p>
                <button onClick={handleGetAppointment} className='btn btn-primary'>GET APPOINTMENT</button>

            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className=" img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;
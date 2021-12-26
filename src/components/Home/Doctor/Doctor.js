import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = ({doctor}) => {
    return (
        <div className='col-md-4 text-center mt-5'>
            <img style={{height:'250px',marginBottom:'20px',borderRadius:'5px'}} src={`data:image/png;base64,${doctor.image.img}`} alt="" />
            <h5>{doctor.name}</h5>
            <div className='d-flex justify-content-center'>
                <small className='text-primary'><FontAwesomeIcon icon={faPhoneAlt} /></small>
                <small>+9758456232</small>
            </div>
        </div>
    );
};

export default Doctor;
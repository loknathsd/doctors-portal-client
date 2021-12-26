import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css'


const InfoCard = ({ info }) => {
    console.log(info)
    return (
        <div className='col-md-4 text-white info-card'>
            <div className={`justify-content-center info-container d-flex info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className='font-icon' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div className='ms-4' >
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
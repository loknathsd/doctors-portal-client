import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infos = [
        {
            title: 'Opening hours',
            description: 'lorem ipsam is a simply',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Brockly NY 10036,united state',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Contact us now',
            description: '+000123456789',
            icon: faPhoneAlt,
            background: 'primary'
        }
    ]
    return (
        <section className='d-flex  justify-content-center '>
            <div className='w-75 row'>
                {
                    infos.map(info => <InfoCard info={info}></InfoCard>)
                }
                
            </div>


        </section>
    );
};

export default BusinessInfo;
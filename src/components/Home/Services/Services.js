import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const servicesData = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teath Whitening',
            img: whitening
        }
    ]
    return (
        <section>
            <div className='text-center mt-5'>
                <h4 style={{ color: '#1CC7C1',marginBottom:'10px' }}>OUR SERVICES</h4>
                <h1>Services We Provide</h1>
            </div>
            <div>
                <div className='d-flex justify-content-center mt-5 pt-5'>
                    <div className=" w-75 row">
                        {
                            servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                        }
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default Services;
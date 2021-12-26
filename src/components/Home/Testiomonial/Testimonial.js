import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
        <div className='shadow p-4 my-5 bg-white rounded'>
            <p className='text-secondary'>{testimonial.quote}</p>
            <div className='d-flex mt-5'>
                <img src={testimonial.img} alt="" />
                <div className='align-self-center ms-3' >
                    <h5 style={{color: '#12D0D6'}}>{testimonial.name}</h5>
                    <h6>{testimonial.from}</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
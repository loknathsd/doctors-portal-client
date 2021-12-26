import React from 'react';
import winson from '../../../images/people-1.png' ;
import ema from '../../../images/people-2.png';
import aliza from '../../../images/people-3.png'
import Testimonial from '../Testiomonial/Testimonial';
import './Testimonials.css'

const Testimonials = () => {
     
    const testimonials = [
        {
            quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, eius perferendis consectetur facere ipsa illum delectus perspiciatis aut iure quasi',
            name:'Winson Herry',
            from : 'California',
            img:winson,
        },
        {
            quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, eius perferendis consectetur facere ipsa illum delectus perspiciatis aut iure quasi',
            name:'Winson Herry',
            from : 'California',
            img:ema,
        },
        {
            quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, eius perferendis consectetur facere ipsa illum delectus perspiciatis aut iure quasi',
            name:'Winson Herry',
            from : 'California',
            img:aliza,
        }

    ]

    return (
        <section className='my-5 py-5'>
            <div className="container">
                <div className="section-header">
                     <h5 style={{color: '#12D0D6',marginBottom:'20px'}}>TESTIMONIAL</h5>
                     <h1 style={{color:'#3A4256'}} className='mb-5'>Whats Our Patients <br /> Says</h1>
                </div>
                <div className="card-deck">
                    {
                        testimonials.map(testimonial=><Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
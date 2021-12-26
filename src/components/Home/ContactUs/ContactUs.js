import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className='text-center  ps-5 my-5 py-5'>
            <div className="container contact-area py-5  ">
                <div className="row py-5">
                    <h5 className='text-info'>CONTACT US</h5 >
                    <h1>Always Connect With us</h1>
                    <form className='w-50  mx-auto mt-5'>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email*"/>
                            <input type="text" class="form-control my-4" id="exampleInputPassword1" placeholder="Subject*"/>
                            <textarea placeholder='Your Message*' name="" id="" className='form-control' rows="5"></textarea>
                        </div>
                       
                        <button type="submit" class="btn btn-primary mt-4">Submit</button>
                    
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
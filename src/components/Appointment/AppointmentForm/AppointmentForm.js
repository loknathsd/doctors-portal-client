import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, bookingSub ,date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        data.service = bookingSub;
        data.date = date;
        data.created = new Date();

        fetch('https://calm-waters-50495.herokuapp.com/addAppointment',{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success =>{
            if(success){
                
                closeModal();
                alert('Appointment successful')
            }
        })
        
    }


    return (
        <div >

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-center text-brand'>{bookingSub}</h2>
                <p className='text-center'>On {date.toDateString()}</p>

                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group pb-3">
                        <input className='form-control' type='text' name='name'   {...register("name", { required: true })} placeholder='Your name' />
                        {errors.name && <span className='text-danger' >This field is required</span>}

                    </div>
                    <div className="form-group pb-3">
                        <input className='form-control' type='text' name='phone' placeholder='Phone Number' {...register("phone", { required: true })} />
                        {errors.phone && <span className='text-danger'>This field is required</span>}

                    </div>
                    <div className="form-group pb-3">
                        <input className='form-control' type='text' name='email' placeholder='Your Email' {...register("email", { required: true })} />
                        {errors.email && <span className='text-danger'>This field is required</span>}

                    </div>
                    <div className="form-group row pb-3">
                        <div className="col-md-4">
                            <select className='form-control' {...register("gender", { required: true })}>
                                <option  value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Others</option>
                            </select>
                            {errors.gender && <span className='text-danger'>This field is required</span>}

                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' placeholder='Age' {...register("age", { required: true })} />
                            {errors.age && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' name='email' placeholder='Weight' {...register("weight", { required: true })} />
                            {errors.weight && <span className='text-danger'>This field is required</span>}
                        </div>


                    </div>
                    
                    <div className="form-group">
                        <button type='submit' className='btn btn-brand text-light'>Submit</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
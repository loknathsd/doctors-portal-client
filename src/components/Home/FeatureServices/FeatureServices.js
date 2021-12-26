import React from 'react';
import treatment from '../../../images/treatment.png'


const FeatureServices = () => {
    return (
       <section className='feature-services d-flex justify-content-center my-5 py-5 '>
           <div className="row w-75 mb-5">
               <div className="col-md-5">
                   <img className='img-fluid' src={treatment} alt="" />
               </div>
               <div className="col-md-6 mt-5 pt-2 ">
                   <h1 style={{color: '#3A4256'}}>Exceptional Dental Care , On your Terms</h1>
                   <p className='text-muted mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis neque est incidunt sit veritatis, amet nobis voluptatem maiores aperiam rerum quod, quia explicabo, porro similique! Nobis ex quae incidunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eos laboriosam eaque harum incidunt eligendi similique. Dicta nesciunt tenetur, minus earum facilis optio at quod nihil impedit fugiat, similique laudantium.</p>
                    <button className='btn btn-primary mt-4'>Learn More</button>
               </div>
           </div>
       </section>
    );
};

export default FeatureServices;
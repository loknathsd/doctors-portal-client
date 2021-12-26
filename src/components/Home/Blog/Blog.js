import React from 'react';
import './Blog.css'
const Blog = ({ blog }) => {
    return (
        <div className='card mt-5 '>
            <div className="card-body p-4 my-4  ">
                <div className='d-flex'>
                    <img src={blog.img} alt="" />
                    <div className='align-self-center ms-3'>
                        <h5 style={{ fontWeight: 'bold' }} >{blog.author}</h5>
                        <h6 className='text-secondary my-3'>{blog.date}</h6>
                    </div>
                </div>
                <h5 style={{ fontWeight: 'bold' }} className='my-4 '>{blog.title}</h5>
                <p className='text-secondary '>{blog.description}</p>
            </div>
        </div>
    );
};

export default Blog;
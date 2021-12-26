import React from 'react';
import people from '../../../images/people-1.png'
import Blog from '../Blog/Blog';
import './Blogs.css'


const blogData = [
    {
        title:'Check at least a doctor in a year for your teeth',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus cumque beatae quod reiciendis incidunt?',
        author :'Rashed Kabir',
        img : people,
        date :'23 Aug 2020'

    },
    {
        title:'2 times of brush in a day can keep you healthy',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus cumque beatae quod reiciendis incidunt?',
        author :'Dr Caudi',
        img : people,
        date :'23 Aug 2020'

    },
    {
        title:'The tooth cancer is talking a challenge',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus cumque beatae quod reiciendis incidunt?',
        author :'Dr Jhon Mitchel',
        img : people,
        date :'23 Aug 2020'

    }

]

const Blogs = () => {
    return (
        <section>
            <div className="container">
                <div className='text-center '>
                    <h5 style={{color: '#12D0D6',fontWeight:'bold'}} >OUR BLOGS</h5>
                    <h1 style={{color:'#3A4256'}}>From Our Blog News</h1>
                </div>
                <div className="card-deck my-5 py-3  ">
                    {
                        blogData.map(blog=><Blog blog={blog}></Blog>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Blogs;
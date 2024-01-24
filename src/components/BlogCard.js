import React from 'react';
import { Link } from 'react-router-dom';
import blogImg1 from '../assets/images/blog-1.jpg';

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img className='img-fluid' src={blogImg1} alt='blog'/>
            </div>
            <div className="blog-content">
                <p className='date'>1 Dec, 2022</p>
                <h5 className='title'>Lorem Ipsum</h5>
                <p className='desc'>Lorem ipsum dolor sit amet consectetur</p>
                <Link to="/" className='button'>
                    Read More
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
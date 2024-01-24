import React from 'react';
import ReactStars from "react-rating-stars-component";
import watchImg from '../assets/images/watch.jpg'

const ProjectCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card'>
            <div className='product-image'>
                <img src={watchImg} alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className="price">$24.99</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
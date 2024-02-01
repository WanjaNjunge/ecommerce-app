import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import watchImg from '../assets/images/watch.jpg';
import watchImg1 from '../assets/images/watch-01.jpg';
import prodCompareImg from '../assets/images/prodcompare.svg';
import viewImg from '../assets/images/view.svg';
import addCartImg from '../assets/images/add-cart.svg';
import wishListImg from '../assets/images/wish.svg';


const ProjectCard = (props) => {
    const location = useLocation();
    const { grid } = props;

  return (
    <>
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src={wishListImg} alt="wish list" />
                </Link>
            </div>
            <div className='product-image'>
                <img className='img-fluid' src={watchImg1} alt='product'/>
                <img className='img-fluid' src={watchImg} alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly...</p>
                <p className="price">$24.99</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/'>
                        <img src={prodCompareImg} alt='compare'/>
                    </Link>
                    <Link to='/'>
                        <img src={viewImg} alt='view'/>
                    </Link>
                    <Link to='/'>
                        <img src={addCartImg} alt='add cart'/>
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src={wishListImg} alt="wish list" />
                </Link>
            </div>
            <div className='product-image'>
                <img className='img-fluid' src={watchImg1} alt='product'/>
                <img className='img-fluid' src={watchImg} alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly...</p>
                <p className="price">$24.99</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/'>
                        <img src={prodCompareImg} alt='compare'/>
                    </Link>
                    <Link to='/'>
                        <img src={viewImg} alt='view'/>
                    </Link>
                    <Link to='/'>
                        <img src={addCartImg} alt='add cart'/>
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProjectCard
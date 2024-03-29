import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToWishlist } from '../features/products/productSlice';
import ReactStars from "react-rating-stars-component";
import watchImg from '../assets/images/watch.jpg';
import watchImg1 from '../assets/images/watch-01.jpg';
import prodCompareImg from '../assets/images/prodcompare.svg';
import viewImg from '../assets/images/view.svg';
import addCartImg from '../assets/images/add-cart.svg';
import wishListImg from '../assets/images/wish.svg';


const ProductCard = (props) => {
    const navigate = useNavigate();
    let location = useLocation();
    const { grid, data } = props;
    const dispatch = useDispatch();

    const addToWish = (id)=> {
        dispatch(addToWishlist(id));
    }


  return (
    <>
        {
            Array.isArray(data) && data?.map((item,index)=>{
                return(
                    <div
                    key={index}
                    className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        {/**REVISIT */}
        <div
        className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent' onClick={(e)=>{addToWish(item?._id)}}>
                    <img src={wishListImg} alt="wish list" />
                </button>
            </div>
            <div className='product-image' onClick={()=>navigate("/product/"+item?._id)} src={viewImg} alt='view'>
                <img className='img-fluid mx-auto' src={watchImg1} alt='product'/>
                <img className='img-fluid' src={watchImg} alt='product'/>
            </div>
            <div className='product-details' onClick={()=>navigate("/product/"+item?._id)} src={viewImg} alt='view'>
                <h6 className='brand'>{item?.brand}</h6>
                <h5 className='product-title'>
                    {item?.title}
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={parseFloat(item?.totalrating)}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>{item?.description}</p>
                <p className="price">KSh. {item?.price}</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src={prodCompareImg} alt='compare'/>
                    </button>
                    <button onClick={()=>navigate("/product/"+item?._id)} className='border-0 bg-transparent'>
                        <img src={viewImg} alt='view'/>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={addCartImg} alt='add cart'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
                )
            })
        }

        

    </>
  )
}

export default ProductCard
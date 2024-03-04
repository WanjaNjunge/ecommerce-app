import React, { useEffect } from 'react';
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import crossImg from '../assets/images/cross.svg';
import watchImg from '../assets/images/watch-01.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const dispatch = useDispatch();

    const getWishlistFromDb = ()=>{
      dispatch(getUserProductWishlist());
    }
    
    useEffect(()=>{
        getWishlistFromDb();
    },[]);

    const wishlistState = useSelector((state) => state.auth.wishlist?.wishlist || []);

    const removeFromWishlist = (id)=>{
        dispatch(addToWishlist(id));
        setTimeout(()=>{
            dispatch(getUserProductWishlist());
        }, 300)
      }

  return (
    <>
        <Meta title={'Wishlist'}/>
        <BreadCrumb title="Wishlist"
        />

        <Container className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                {
                    wishlistState.length === 0 && (
                        <div className='text-center fs-3'>
                        <p>No products added to the wishlist</p>
                        <Link to='/product' className='button mb-3'>Continue Shopping</Link>
                        </div>
                    )
                }
                {
                    
                    wishlistState?.map((item, index) => {
                        return (
                            <div className='col-3' key={index}>
                        <div className='wishlist-card position-relative'>
                        <img onClick={()=>{removeFromWishlist(item?._id)}}
                        src={crossImg} alt="cross" className='position-absolute cross img-fluid' />
                        <div className='wishlist-card-image bg-white'>
                        <img
                            className='img-fluid d-block mx-auto'
                            width={160}
                            // src={item?.images[0].url ? item?.images[0].url: {watchImg} }
                            src={watchImg}
                            alt='watch' />
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'>{item?.title}
                            </h5>
                            <h6 className='price'>$ {item?.price}</h6>
                        </div>
                        </div>
                    </div>
                        )
                    })
                }
                    
                    
                </div>
            
        </Container>
    </>
  )
}

export default Wishlist


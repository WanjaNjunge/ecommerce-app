import React from 'react'
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import crossImg from '../assets/images/cross.svg';
import watchImg from '../assets/images/watch-01.jpg'

const Wishlist = () => {
  return (
    <>
        <Meta title={'Wishlist'}/>
        <BreadCrumb title="Wishlist"
        />

        <Container className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                        <img src={crossImg} alt="cross" className='position-absolute cross img-fluid' />
                        <div className='wishlist-card-image'>
                        <img
                            className='img-fluid w-100'
                            src={watchImg}
                            alt='watch' />
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'>
                                    APPLE Watch Series 2 – 42 mm Stainless Steel Case 
                            </h5>
                            <h6 className='price'>$ 100</h6>
                        </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                        <img src={crossImg} alt="cross" className='position-absolute cross img-fluid' />
                        <div className='wishlist-card-image'>
                        <img
                            className='img-fluid w-100'
                            src={watchImg}
                            alt='watch' />
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'>
                                    APPLE Watch Series 2 – 42 mm Stainless Steel Case 
                            </h5>
                            <h6 className='price'>$ 100</h6>
                        </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                        <img src={crossImg} alt="cross" className='position-absolute cross img-fluid' />
                        <div className='wishlist-card-image'>
                        <img
                            className='img-fluid w-100'
                            src={watchImg}
                            alt='watch' />
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'>
                                    APPLE Watch Series 2 – 42 mm Stainless Steel Case 
                            </h5>
                            <h6 className='price'>$ 100</h6>
                        </div>
                        </div>
                    </div>
                </div>
            
        </Container>
    </>
  )
}

export default Wishlist
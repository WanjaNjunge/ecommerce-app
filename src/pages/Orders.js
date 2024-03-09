import React, { useEffect } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../features/user/userSlice';

const Orders = () => {
    const dispatch = useDispatch();
    const orderState = useSelector(state=>state?.auth?.getOrderedProducts?.orders);
    

    useEffect(()=>{
        dispatch(getOrders());
    }, [dispatch])
  return (
    <>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className='row'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-3'>
                        <h5>Order Id</h5>
                    </div>
                    <div className='col-3'>
                        <h5>Total Amount</h5>
                    </div>
                    <div className='col-3'>
                        <h5>Total Amount + Delivery</h5>
                    </div>
                    <div className='col-3'>
                        <h5>Status</h5>
                    </div>
                </div>
                <div className='col-12 mt-3'>
                {
                    orderState && orderState.map((item,index) => {
                        return (
                            <div style={{backgroundColor: "#febd69"}} className='row pt-3 my-3'key={index} >
                    <div className='col-3'>
                        <p>{item?._id}</p>
                    </div>
                    <div className='col-3'>
                        <p>{item?.totalPrice}</p>
                    </div>
                    <div className='col-3'>
                        <p>{item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className='col-3'>
                        <p>{item?.orderStatus}</p>
                    </div>
                    <div className='col-12'>
                <div className='row bg-secondary p-3'>
                    <div className='col-3'>
                        <h6 className='text-white'>Product Name</h6>
                    </div>
                    <div className='col-3'>
                        <h6 className='text-white'>Brand</h6>
                    </div>
                    <div className='col-3'>
                        <h6 className='text-white'>Quantity</h6>
                    </div>
                    <div className='col-3'>
                        <h6 className='text-white'>Price</h6>
                    </div>
                    {
                        item?.orderItems?.map((i, index)=>{
                            return (
                                <div className='col-12'>
                <div className='row bg-secondary py-3'>
                    <div className='col-3'>
                        <p className='text-white'>{i?.product?.title}</p>
                    </div>
                    <div className='col-3'>
                        <p className='text-white'>{i?.product?.brand}</p>
                    </div>
                    <div className='col-3'>
                        <p className='text-white'>{i?.quantity}</p>
                    </div>
                    <div className='col-3'>
                        <p className='text-white'>{i?.price}</p>
                    </div>
                </div>
                </div>
                            )
                        })
                    }
                </div>
                </div>
                </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Orders
import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartProd, getCartDetails, updateCartProd } from '../features/user/userSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(null);
    const userCartState = useSelector(state=>state?.auth?.cartProducts);

    useEffect(() => {
        dispatch(getCartDetails());
      }, [dispatch]);

    const removeCartItem = (id) => {
        dispatch(deleteCartProd(id))
        setTimeout (()=>{
            dispatch(getCartDetails());
        }, 200)
    }

    const updateCartItemQuantity = (cartItemId, quantity) => {
        dispatch(updateCartProd({ cartItemId, quantity }));
        setTimeout (()=>{
            dispatch(getCartDetails());
        }, 200);
    }

    useEffect(() => {
        if (userCartState && userCartState.length > 0) {
            let sum = 0;
            for (let index = 0; index < userCartState.length; index++) {
                sum += Number(userCartState[index].quantity) * userCartState[index].price;
            }
            setTotalAmount(sum);
        } else {
            setTotalAmount(0);
        }
    }, [userCartState]);
    

  return (
    <>
        <Meta title={'Cart'}/>
        <BreadCrumb title="Cart"
        />

        <Container class1='cart-wrapper home-wrapper-2 py-5'>
            
                <div className='row'>
                
                    <div className='col-12'>
                        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        {
                            userCartState && userCartState.length === 0 && (
                                <div className='text-center fs-3'>
                                <p>No products added to cart</p>
                                <Link to='/product' className='button mb-3'>Continue Shopping</Link>
                                </div>
                            )
                        }
                        
                        {
                            userCartState && userCartState?.map((item, index)=>{
                                return(
                                    <div key={index} className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img 
                                    className='img-fluid mx-auto' src={item?.productId?.images[0]?.url} alt='product'/>
                                </div>
                                <div className='w-75'>
                                    <p>{item?.productId?.title}</p>
                                    <p>{item?.productId?.brand}</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>KSh. {item?.price}</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input type='number' min={1} max={10} id='' className='form-control' name=''
                                    value={item?.quantity}
                                    onChange={(e)=>{updateCartItemQuantity(item?._id, e.target.value)}} />
                                </div>
                                <div>
                                <AiFillDelete onClick={()=>{removeCartItem(item?._id)}} className='text-danger'/>
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className='price'>KSh. {item?.price * item?.quantity}  </h5>
                            </div>
                        </div>
                                )
                            })
                        }
                        
                        
                    </div>
                    <div className='col-12 py-2 mt-4'>
                        {
                            userCartState && userCartState.length > 0 && (
                                <div className='d-flex justify-content-between align-items-baseline'>
                        <Link to='/product' className='button'>
                            Continue Shopping
                        </Link>
                       {
                        (totalAmount !== null ||  totalAmount > 0) &&  <div className='d-flex flex-column align-items-end'>
                            <h4>Subtotal: KSh.  {totalAmount}</h4>
                            <p>Delivery Charges calculated at checkout</p>
                            <Link to='/checkout' className='button'>Checkout</Link>
                        </div>
                        }
                        </div>
                            )
                        }
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Cart
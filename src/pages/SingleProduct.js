import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import ReactImageZoom from 'react-image-zoom';
// import Color from '../components/Color';
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { getAProduct } from '../features/products/productSlice';
import { toast } from 'react-toastify';
import { addProdToCart, getCartDetails } from '../features/user/userSlice';
import { Link } from 'react-router-dom';



const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const productState = useSelector(state => state.product.product);
  const cartState = useSelector(state=>state.auth.cartProducts);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getCartDetails());
  }, [dispatch, getProductId]);

  useEffect(() => {
    if (cartState) {
      for (let index = 0; index < cartState.length; index++) {
        if (getProductId === cartState[index]?.productId?._id) {
          setAlreadyAdded(true)
        }
      }
    }
  }, [cartState, getProductId]);

  const uploadCart =  () => {
    if (quantity === "") {
      
      toast.error("Please enter valid quantity number");
      return false
    } else {
      dispatch(addProdToCart({ productId: productState?._id, quantity, price: productState?.price} ))
      navigate('/cart')
    }
  }
  
  
  
  

  const props = {width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};

  const [orderedProduct, setorderedProduct] = useState(true);
  console.log(setorderedProduct);

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <>
        <Meta title={'Product Name'}/>
      <BreadCrumb title="Product Name" />

      <Container class1='main-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-6'>
                  <div className='main-product-image'>
                    <div>
                    <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="product" className='img-fluid' />
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="product" className='img-fluid' />
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="product" className='img-fluid' />
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="product" className='img-fluid' />
                    </div>

                  </div>
                </div>
                <div className='col-6'>
                  <div className='main-product-details'>
                    <div className='border-bottom'>
                      <h3 className='title'>   
                      {productState?.title}
                      </h3>
                    </div>
                    <div className='border-bottom py-3'>
                      <p  className='price'>KSh. {productState?.price}</p>
                      <div className='d-flex align-items-center gap-10'>
                        <ReactStars
                        count={5}
                        size={24}
                        value={productState?.totalrating}
                        edit={false}
                        activeColor="#ffd700"
                        />
                        <p className='mb-0 t-review'>( 2 reviews )</p>
                      </div>
                      <a className='review-btn' href='#review'>Write a review</a>
                    </div>
                    <div className='py-3'>
                    
                      <div className="d-flex gap-10 align-items-center my-2"><h3 className='product-heading'>Brand :</h3> <p className='product-data'>{productState?.brand}</p>

                      </div>
                      
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className='product-heading'>Tags :</h3> <p className='product-data'>{productState?.tags}</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className='product-heading'>Availability :</h3> <p className='product-data'>In Stock</p>
                      </div>
                      {/* <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h3 className='product-heading'>Size :</h3> <div className='d-flex flex-wrap gap-15'>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                        </div>
                      </div> */}
                      {/* <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h3 className='product-heading product-color'>Color :</h3> <Color />
                      </div> */}
                      <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3"><h3 className='product-heading'>Quantity :</h3>
                      {
                        alreadyAdded === false && <>
                        <div className='product-data'>
                        <input 
                          type='number'
                          name=''
                          min={1}
                          max={10}
                          className='form-control'
                          style={{ width: "70px" }}
                          id=''
                          onChange={(e)=>setQuantity(e.target.value)}
                          value={quantity}

                        />
                      </div>
                        </>
                      }
                      <div className={ alreadyAdded ? "ms-0" : "ms-5 d-flex gap-30 align-items-center"}>

                        <button
                        onClick={()=>{alreadyAdded ? navigate('/cart') : uploadCart()}}
                        // REVISIT
                        // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                          type='button'
                          className='button border-0'>
                            {alreadyAdded? "Go to cart" : "Add to cart"}
                          </button>
                        {/* <button
                          className='button signup'>Buy Now
                        </button> */}
                      </div>
                      </div>
                      <div className='d-flex align-items-center gap-15 mt-3 mb-3'>
                        <div>
                          <Link><FaRegHeart className='fs-5 me-2' />Add to Wishlist</Link>
                        </div>
                        <div>
                          <Link><FaCodeCompare className='fs-5 me-2' />Add to Compare</Link>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-10 my-3"><h3 className='product-heading'>Delivery & Returns :</h3> <p className='product-data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                      </div>
                      <div className="d-flex gap-10 align-items-center my-3"><h3 className='product-heading'>Share :</h3>
                      <button onClick={() => {
                        copyToClipboard(window.location.href)}}>
                          Copy Product Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
      </Container>

      <Container class1='description-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>
              
              <p>
              {productState?.description}
              </p>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='reviews-wrapper home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 id='review'>Reviews</h3>
              <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Customer Reviews</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={productState?.totalrating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                  <Link className='text-dark text-decoration-underline'>Write a review</Link>
                </div>
                )}
              </div>
              <div className='review-form py-4'>
              <h4>Write a review</h4>
              <form action='' className='d-flex flex-column gap-15'>
                    <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                    </div>
                    <div>
                      <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Comments'
                      ></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button type="submit" className='button border-0'>Submit Review</button>
                    </div>
                  </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>Jane Doe</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>
                <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>John Doe</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={2}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>
              </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
              Relevant Products
              </h3>
            </div>
            <div className='row'>
            <ProductCard />
            </div>
          </div>
      </Container>
    </>
  )
}

export default SingleProduct
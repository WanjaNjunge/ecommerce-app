import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
//import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import serviceImg1 from '../assets/images/service.png';
import serviceImg2 from '../assets/images/service-02.png';
import serviceImg3 from '../assets/images/service-03.png';
import serviceImg4 from '../assets/images/service-04.png';
import serviceImg5 from '../assets/images/service-05.png';
import mainBannerImg1 from '../assets/images/main-banner-1.jpg';
import catBannerImg1 from '../assets/images/catbanner-01.jpg';
import catBannerImg2 from '../assets/images/catbanner-02.jpg';
import catBannerImg3 from '../assets/images/catbanner-03.jpg';
import catBannerImg4 from '../assets/images/catbanner-04.jpg';
import cameraImg from '../assets/images/camera.jpg';
import tvImg from '../assets/images/tv.jpg';
import headPhoneImg from '../assets/images/headphone.jpg';
import brandImg1 from '../assets/images/brand-01.png';
import brandImg2 from '../assets/images/brand-02.png';
import brandImg3 from '../assets/images/brand-03.png';
import brandImg4 from '../assets/images/brand-04.png';
import brandImg5 from '../assets/images/brand-05.png';
import brandImg6 from '../assets/images/brand-06.png';
import brandImg7 from '../assets/images/brand-07.png';
import brandImg8 from '../assets/images/brand-08.png';
import famousImg1 from '../assets/images/famous-1.jpg';
import famousImg2 from '../assets/images/famous-2.webp';
import laptopImg from '../assets/images/laptop.jpg';
import monitorImg from '../assets/images/monitor-01.jpg';
import phoneImg from '../assets/images/phone-01.jpg';
import tabletImg from '../assets/images/tab4.webp';
import watchImg from '../assets/images/watch-2.jpg';
import phoneImg1 from '../assets/images/phone-03.webp';
import speakerImg3 from '../assets/images/speaker-3.webp';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, getAllProducts } from '../features/products/productSlice';
import ReactStars from "react-rating-stars-component";
import watchImg1 from '../assets/images/watch.jpg';
import prodCompareImg from '../assets/images/prodcompare.svg';
import viewImg from '../assets/images/view.svg';
import addCartImg from '../assets/images/add-cart.svg';
import wishListImg from '../assets/images/wish.svg';


const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state)=> state.product.product);

  const getProducts = () => {
    dispatch(getAllProducts());
  }

  const addToWish = (id)=> {
    dispatch(addToWishlist(id));
}


  useEffect(()=>{
    getProducts();
  },[])

  return (
    <>
    <Container class1='home-wrapper-1 py-5'>
    <div className='row'>
            <div className="col-6">
              <div className='main-banner position-relative'>
                <img
                  src={mainBannerImg1}
                  alt='main banner'
                  className='img-fluid rounded'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img
                  src={catBannerImg1}
                  alt='main banner'
                  className='img-fluid rounded'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 <br/> or $64.62/mo</p>
                  
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src={catBannerImg2}
                  alt='main banner'
                  className='img-fluid rounded'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $599.00 <br/> or $41.62/mo</p>
                  
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src={catBannerImg3}
                  alt='main banner'
                  className='img-fluid rounded'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band <br/> styles and colors</p>
                  
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src={catBannerImg4}
                  alt='main banner'
                  className='img-fluid rounded'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback <br/> & ultra-low distortion</p>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
    </Container>
      
    <Container class1='home-wrapper-2 py-5'>
    <div className="row">
            <div className="col-12">
              <div className='services d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                  <img src={serviceImg1} alt='services'/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={serviceImg2} alt='services'/>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={serviceImg3} alt='services'/>
                  <div>
                    <h6>Surport 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={serviceImg4} alt='services'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get factory default price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={serviceImg5} alt='services'/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% protected payments</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
    </Container>
      

      <Container class1='home-wrapper-2 py-5'>
        
          <div className="row">
            <div className="col-12">
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={cameraImg} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tvs</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tvImg} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Laptops</h6>
                    <p>10 items</p>
                  </div>
                  <img src={laptopImg} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src={headPhoneImg} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>All-in-Ones</h6>
                    <p>10 items</p>
                  </div>
                  <img src={monitorImg} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Mobile Phones</h6>
                    <p>10 items</p>
                  </div>
                  <img src={phoneImg} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Tablets</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tabletImg} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={watchImg} alt='camera'/>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
              Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <div className="col-3">
              <div className='famous-card position-relative'>
              <img className='img-fluid' src={famousImg1} alt='famous'/>
                <div className='famous-content position-absolute'>
                    <h5>Big Screen</h5>
                    <h6>Smart Watch Series 7</h6>
                    <p>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className='famous-card position-relative'>
              <img className='img-fluid' src={famousImg2} alt='famous'/>
                <div className='famous-content position-absolute'>
                    <h5 className='text-dark' >Studio Display</h5>
                    <h6 className='text-dark' >600 nits of brightness</h6>
                    <p className='text-dark'>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className='famous-card position-relative'>
              <img className='img-fluid' src={phoneImg1} alt='famous'/>
                <div className='famous-content position-absolute'>
                    <h5 className='text-dark' >Smart Phones</h5>
                    <h6 className='text-dark' >Smart Phone 13 pro</h6>
                    <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo.
                    for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className='famous-card position-relative'>
              <img className='img-fluid' src={speakerImg3} alt='famous'/>
                <div className='famous-content position-absolute'>
                    <h5 className='text-dark' >Home Speakers</h5>
                    <h6 className='text-dark' >Room-filling sound</h6>
                    <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1='special-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            {productState && productState.map((item, index) => {
              let hasSpecialProduct = false;
              for (let i = 0; i < item.tags.length; i++) {
                if (item.tags[i] === 'special') {
                  hasSpecialProduct = true;
                  break; // Exit the loop since we found a special product
                }
              }
              return hasSpecialProduct ? <SpecialProduct key={index} title={item?.title} brand={item?.brand} price={item?.price} quantity={item?.quantity} totalrating={parseFloat(item?.totalrating, 10)} /> : null;
            })}
            {(!productState || productState.length === 0) && <p>No Products Available</p>}
          </div>
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
              Our Popular Products
              </h3>
            </div>
          </div>
            <div className='row'>
            {productState && productState.map((item, index) => {
              let hasPopularProduct = false;
              for (let i = 0; i < item.tags.length; i++) {
                if (item.tags[i] === 'popular') {
                  hasPopularProduct = true;
                  break; // Exit the loop since we found a special product
                }
              }

                return( hasPopularProduct ? 
                    <div
                    key={index}
                    className="col-3">
        {/**REVISIT */}
        <Link 
        // to={`${location.pathname === "/" ? "/product/:id" : location.pathname === "/product/:id" ? "/product/:id" : ":id"}`} 
        className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent' onClick={(e)=>{addToWish(item?._id)}}>
                    <img src={wishListImg} alt="wish list" />
                </button>
            </div>
            <div className='product-image'>
                <img className='img-fluid mx-auto' src={watchImg1} alt='product'/>
                <img className='img-fluid mx-auto' src={watchImg} alt='product'/>
            </div>
            <div className='product-details'>
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
                
                <p className="price">KSh. {item?.price}</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src={prodCompareImg} alt='compare'/>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={viewImg} alt='view'/>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={addCartImg} alt='add cart'/>
                    </button>
                </div>
            </div>
        </Link>
    </div> : null
                )
            })
        }
        {(!productState || productState.length === 0) && <p>No Products Available</p>}

        

    </div>
            
            
          
      </Container>

      <Container class1='marquee-wrapper py-5'>
          <div className='row'>
            <div className="col-12">
              <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src={brandImg1} alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src={brandImg2} alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src={brandImg3} alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src={brandImg4} alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src={brandImg5} alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src={brandImg6} alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src={brandImg7} alt='brand'/>
                </div>
                <div className='mx-4 w-25'>
                  <img src={brandImg8} alt='brand'/>
                </div>
              </Marquee>
              </div>
            </div>
          </div>
      </Container>

      

      {/* <Container class1='blog-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
              Latest Blogs
              </h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
      </Container> */}
    </>
  )
}

export default Home
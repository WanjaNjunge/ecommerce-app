import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import SpecialProduct from '../components/SpecialProduct';
import mainBannerImg1 from '../assets/images/main-banner-1.jpg';
import catBannerImg1 from '../assets/images/catbanner-01.jpg';
import catBannerImg2 from '../assets/images/catbanner-02.jpg';
import catBannerImg3 from '../assets/images/catbanner-03.jpg';
import catBannerImg4 from '../assets/images/catbanner-04.jpg';
import serviceImg1 from '../assets/images/service.png';
import serviceImg2 from '../assets/images/service-02.png';
import serviceImg3 from '../assets/images/service-03.png';
import serviceImg4 from '../assets/images/service-04.png';
import serviceImg5 from '../assets/images/service-05.png';
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


const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
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

        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className="container-xxl">
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
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className="container-xxl">
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
        </div>
      </section>

      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
              Featured Collection
              </h3>
            </div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>

      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
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
                    <h5 className='text-dark' >Big Screen</h5>
                    <h6 className='text-dark' >Smart Watch Series 7</h6>
                    <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
              Our Popular Products
              </h3>
            </div>
            <div className='row'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            </div>
          </div>
        </div>
      </section>

      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
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
        </div>
      </section>

      

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
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
        </div>
      </section>
    </>
  )
}

export default Home
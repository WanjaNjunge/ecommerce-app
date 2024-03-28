import React from 'react'
import { Link } from 'react-scroll';
import Container from '../components/Container';
import heroImage from '../assets/images/hero2.jpg';
import { FaHome, FaPhoneAlt, FaInfo } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import serviceImg1 from '../assets/images/coding.gif';
import serviceImg2 from '../assets/images/web-browser.gif';
import serviceImg3 from '../assets/images/mobile-apps.gif';

const Services = () => {

  

  return (
    <>
      <Container class1='services-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
          <div className='services-hero bg-img rounded mb-5' style={{backgroundImage: `url(${heroImage})`, backgroundSize: 'cover'}}>
            <div className='content-overlay'>
              <h1 className='mb-4'>Tailored Solutions For Your Business</h1>
              <p>With a focus on seamless integration, scalability, and cutting-edge technology, we enable businesses to thrive in today's fast-paced digital world.</p>
              <Link to='contact-form' smooth={true} duration={100}><button className='button border-0'>Let's talk</button></Link>
              
            </div>
          </div>
          <div className='services-content col-12'>
            <div className='d-flex flex-wrap gap-15 justify-content-between align-items-center'>
              <div className="card" style={{width: "22rem"}}>
              <img src={serviceImg1} className="card-img-top" alt="..." style={{width: "150px", height: "150px"}} />
                <div className="card-body" style={{height: "400px", overflow: "hidden"}}>
                  <h5 className="card-title">Software Development</h5>
                  <p className="card-text">Transform your online presence with our comprehensive software development services, covering both backend and frontend aspects, with a collaborative and agile approach, we deliver full-stack web solutions that align perfectly with your business goals, enhancing both functionality and user satisfaction.</p>
                </div>
              </div>
            
              <div className="card" style={{width: "22rem"}}>
              <img src={serviceImg2} className="card-img-top" alt="..." style={{width: "150px", height: "150px"}} />
                <div className="card-body" style={{height: "400px", overflow: "hidden"}}>
                  <h5 className="card-title">Web Design</h5>
                  <p className="card-text">Elevate your online presence with our expert web design services. Our creative team combines aesthetics and functionality to craft visually stunning and user-friendly websites. From responsive layouts to intuitive navigation, we ensure a seamless user experience across various devices.</p>
                </div>
              </div>
            
              <div className="card" style={{width: "22rem"}}>
              <img src={serviceImg3} className="card-img-top" alt="..." style={{width: "150px", height: "150px"}} />
                <div className="card-body" style={{height: "400px", overflow: "hidden"}}>
                  <h5 className="card-title">Mobile Apps</h5>
                  <p className="card-text">Bring your ideas to life and reach a broader audience with our mobile app development services. Whether you prefer the efficiency of hybrid apps or the platform-specific advantages of native apps. We provide end-to-end solutions to help you make a significant impact in the mobile app landscape</p>
                </div>
              </div>
            </div>
          </div>
          <div id='contact-form' className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div  >
                  <h3 className='contact-title mb-4'>Request A Quote</h3>
                  <p>Tell us a few things about your business and we will guide you through our solutions to find the perfect match for your digital needs.</p>
                  <form action='' 
                  // onSubmit={formik.handleSubmit} 
                  className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type='text'
                        className='form-control'
                        placeholder='Name'
                        // onChange={formik.handleChange('name')}
                        // onBlur={formik.handleBlur('name')}
                        // value={formik.values.name}
                      />
                      {/* <div className='error'>
                          {formik.touched.name && formik.errors.name}
                      </div> */}
                    </div>
                    <div>
                      <input 
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        // onChange={formik.handleChange('email')}
                        // onBlur={formik.handleBlur('email')}
                        // value={formik.values.email}
                      />
                      {/* <div className='error'>
                        {formik.touched.email && formik.errors.email}
                      </div> */}
                    </div>
                    <div>
                      <input 
                        type='tel'
                        className='form-control'
                        placeholder='Mobile Number'
                        // onChange={formik.handleChange('mobile')}
                        // onBlur={formik.handleBlur('mobile')}
                        // value={formik.values.mobile}
                      />
                      {/* <div className='error'>
                          {formik.touched.mobile && formik.errors.mobile}
                      </div> */}
                    </div>
                    <div>
                      <input 
                        type='text'
                        className='form-control'
                        placeholder='Solution Enquiry'
                        // onChange={formik.handleChange('name')}
                        // onBlur={formik.handleBlur('name')}
                        // value={formik.values.name}
                      />
                      {/* <div className='error'>
                          {formik.touched.name && formik.errors.name}
                      </div> */}
                    </div>
                    <div>
                      <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Message'
                      // onChange={formik.handleChange('comment')}
                      //   onBlur={formik.handleBlur('comment')}
                      //   value={formik.values.comment}
                      ></textarea>
                      {/* <div className='error'>
                          {formik.touched.comment && formik.errors.comment}
                      </div> */}
                    </div>
                    <div>
                      <button type="submit" className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Visit us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'><FaHome className='fs-5' />
                      <address className='mb-0'>
                      Accra Trade Centre 3rd Floor T22
                      </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><FaPhoneAlt className='fs-5' />
                      <a href='tel:0768468747'>
                      0768468747 / 0789591869
                      </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><IoIosMail className='fs-5' />
                      <a href='mailto:abc@gmail.com'>
                      abc@gmail.com
                      </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><FaInfo className='fs-5' />
                      <p className='mb-0'>
                        Monday - Saturday : 9am to 5pm <br/> Sunday : Closed
                      </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Services
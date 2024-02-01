import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { FaHome, FaPhoneAlt, FaInfo } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'}/>
      <BreadCrumb title="Contact Us" />

      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8181397322273!2d36.822819088854985!3d-1.282948899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112a2e301e1b%3A0x38b759d1c45990ba!2sAccra%20Trade%20Centre!5e0!3m2!1sen!2ske!4v1706781166044!5m2!1sen!2ske" width="600" height="450" className='border-0 w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'> Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input 
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input 
                        type='tel'
                        className='form-control'
                        placeholder='Mobile Number'
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
                    <div>
                      <button className='button border-0'>Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'> Get in touch with us</h3>
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
      </div>
    </>
  )
}

export default Contact
import React from 'react'
import { Link } from 'react-router-dom';
import { BsWhatsapp, BsTwitterX, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/*<footer className='py-3'>
        <div className="container-xxl">
          <div className='row'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>

              </div>
            </div>
          </div>
        </div>
      </footer>*/}
      <footer className='py-4'>
      <div className="container-xxl">
          <div className='row'>
            <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                Moi Avenue, <br /> Nairobi, Kenya <br />
                Postal Address
              </address>
              <a 
              className='mt-3 d-block mb-1 text-white' 
              href='tel:+254700000000'>
              +254 700000000
              </a>
              <a 
              className='mt-2 d-block mb-0 text-white' 
              href='mailto:abc@gmail.com'>
              abc@gmail.com
              </a>
            </div>
            <div className='social-icons d-flex align-items-center gap-30 mt-4'>
              <a className='text-white' 
              href=''>
                <BsFacebook className='fs-4' />
              </a>
              <a className='text-white' 
              href=''>
                <BsInstagram className='fs-4' />
              </a>
              <a className='text-white' 
              href=''>
                <BsWhatsapp className='fs-4' />
              </a>
              <a className='text-white' 
              href=''>
                <BsTwitterX className='fs-4' />
              </a>
            </div>
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
            </div>
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>FAQ</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
            </div>
            <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}: Powered by <a href='https://wanja-njunge.netlify.app/' target='_blank' rel='noopener noreferrer'>WanjaNjung'e{" "}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
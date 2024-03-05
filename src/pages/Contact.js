import React from 'react'
import Container from '../components/Container';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { FaHome, FaPhoneAlt, FaInfo } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { createQuery } from '../features/contact/contactSlice';

const contactSchema = yup.object({
  name: yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
  email: yup.string().email("Invalid Email Address").required("Email is required"),
  mobile: yup.string().min(10, "Must be at least 3 characters"),
  comment: yup.string().required("Comment is required").min(3, "Must be at least 3 characters"),
})


const Contact = () => {
  const dispatch =useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: ''
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(createQuery(values));
    },
  });


  return (
    <>
      <Meta title={'Contact Us'}/>
      <BreadCrumb title="Contact Us" />

      <Container class1='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8181397322273!2d36.822819088854985!3d-1.282948899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112a2e301e1b%3A0x38b759d1c45990ba!2sAccra%20Trade%20Centre!5e0!3m2!1sen!2ske!4v1706781166044!5m2!1sen!2ske" width="600" height="450" className='border-0 w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title="Google Maps Location"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Send us an email</h3>
                  <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type='text'
                        className='form-control'
                        placeholder='Name'
                        onChange={formik.handleChange('name')}
                        onBlur={formik.handleBlur('name')}
                        value={formik.values.name}
                      />
                      <div className='error'>
                          {formik.touched.name && formik.errors.name}
                      </div>
                    </div>
                    <div>
                      <input 
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        onChange={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        value={formik.values.email}
                      />
                      <div className='error'>
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div>
                      <input 
                        type='tel'
                        className='form-control'
                        placeholder='Mobile Number'
                        onChange={formik.handleChange('mobile')}
                        onBlur={formik.handleBlur('mobile')}
                        value={formik.values.mobile}
                      />
                      <div className='error'>
                          {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </div>
                    <div>
                      <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Comments'
                      onChange={formik.handleChange('comment')}
                        onBlur={formik.handleBlur('comment')}
                        value={formik.values.comment}
                      ></textarea>
                      <div className='error'>
                          {formik.touched.comment && formik.errors.comment}
                      </div>
                    </div>
                    <div>
                      <button type="submit" className='button border-0'>Send</button>
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
      </Container>
    </>
  )
}

export default Contact
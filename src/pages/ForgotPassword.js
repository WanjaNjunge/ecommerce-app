import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { forgotPasswordToken } from '../features/user/userSlice';

const resetPasswordSchema = yup.object({
    email: yup.string().email("Invalid Email Address").required("Email is required"),
  });

const ForgotPassword = () => {
    const dispatch =useDispatch();


    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validationSchema: resetPasswordSchema,
        onSubmit: values => {
            dispatch(forgotPasswordToken(values));
        },
      });


  return (
    <>
      <Meta title={'Forgot Password'}/>
      <BreadCrumb title="Forgot Password"/>

      <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Your Password</h3>
                        <p className='text-center mb-3 mt-2'>We will send you an email to reset your password</p>
                        <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15' >
                            <div>
                                <input type='email'
                                name='email'
                                placeholder='Email'
                                className='form-control'
                                onChange={formik.handleChange("email")}
                              onBlur={formik.handleBlur('email')}
                                value={formik.values.email}
                                />
                            </div>
                            <div className='error text-center'>
                                {formik.touched.email && formik.errors.email}
                            </div>

                            <div>
                                

                                <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                    <button type="submit" className='button border-0'>Submit</button>
                                    <Link to='/login'>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>

    </>
  )
}

export default ForgotPassword
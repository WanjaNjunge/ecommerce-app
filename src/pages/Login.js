import React, { useEffect } from "react";
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link, useNavigate } from "react-router-dom";
import Container from '../components/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../features/user/userSlice';

const loginSchema = yup.object({
    email: yup.string().email("Invalid Email Address").required("Email is required"),
    password: yup.string().required( "Password is required"),
  });

const Login = () => {
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
          dispatch(loginUser(values))
        },
      });

      const { user, isError, isSuccess, isLoading, } = useSelector((state) => state.auth);

      useEffect(() => {
        if (isSuccess) {
          navigate("/");
        } else {
          navigate("");
        }
      }, [user, isError, isSuccess, isLoading, navigate]);

  return (
    <>
        <Meta title={'Login'}/>
        <BreadCrumb title="Login"
        />

        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Login</h3>
                        <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15' >
                            <div>
                                <input type='text'
                                name='email'
                                placeholder='Email Address'
                                className='form-control'
                                onChange={formik.handleChange("email")}
                              onBlur={formik.handleBlur('email')}
                                value={formik.values.email}
                                />
                            </div>
                            <div className='error'>
                                {formik.touched.email && formik.errors.email}
                            </div>
                            <div className='mt-1'>
                                <input type='text'
                                name='password'
                                placeholder='Password'
                                className='form-control'
                                onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur('password')}
                                value={formik.values.password}
                                />
                            </div>
                            <div className='error'>
                                {formik.touched.password && formik.errors.password}
                            </div>

                            <div>
                                <Link to='/forgot-password'>Forgot Password?</Link>

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button
                                    type='submit'
                                    className='button border-0'>Log In</button>
                                    <Link 
                                    to='/signup'
                                    className='button signup'>Sign Up</Link>
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

export default Login
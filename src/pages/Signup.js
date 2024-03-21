import React, {useEffect} from 'react'
import Container from '../components/Container';
import { useFormik } from 'formik';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import * as yup from 'yup';
import { registerUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const signUpSchema = yup.object({
  username: yup.string().defined("Username is required").min(3, "Must be at least 3 characters"),
  email: yup.string().email("Invalid Email Address").required("Email is required"),
  password: yup.string().required( "Password is required"),
});


const Signup = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();


  const authState = useSelector((state) => state?.auth);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      dispatch(registerUser(values));
      localStorage.setItem('verificationEmail', values.email);
      
    },
  });


  
  useEffect(() => {
    if (authState.isSuccess === true) {
      navigate("/verify");
    }
  }, [authState, navigate]);

 console.log("signup:", authState);


  return (
    <>
      <Meta title={'Signup'}/>
        <BreadCrumb title="Signup"
        />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Create Account</h3>
                        <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15' >
                          <div>
                              <input type='text'
                              name='username'
                              placeholder='Username'
                              className='form-control'
                              value={formik.values.username}
                              onChange={formik.handleChange("username")}
                              onBlur={formik.handleBlur('username')}
                              />
                          </div>
                          <div className='error'>
                            {formik.touched.username && formik.errors.username}
                          </div>
                          <div>
                              <input type='email'
                              name='email'
                              placeholder='Email Address'
                              className='form-control'
                              value={formik.values.email}
                              onChange={formik.handleChange("email")}
                              onBlur={formik.handleBlur('email')}
                              />
                          </div>
                          <div className='error'>
                            {formik.touched.email && formik.errors.email}
                          </div>
                          <div className='mt-1'>
                              <input type='password'
                              name='password'
                              placeholder='Password'
                              className='form-control'
                              value={formik.values.password}
                              onChange={formik.handleChange("password")}
                              onBlur={formik.handleBlur('password')}
                              />
                          </div>
                          <div className='error'>
                            {formik.touched.password && formik.errors.password}
                          </div>

                          <div>
                              

                              <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                  <button type='submit' className='button border-0'>Sign Up</button>
                                  
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

export default Signup
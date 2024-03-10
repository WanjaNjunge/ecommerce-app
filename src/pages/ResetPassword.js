import React from 'react'
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { resetPassword } from '../features/user/userSlice';

const resetPasswordSchema = yup.object({
    password: yup.string().required( "Password is required"),
  });



const ResetPassword = () => {
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const getToken = location.pathname.split("/")[2]
    


    const formik = useFormik({
        initialValues: {
          password: '',
        },
        validationSchema: resetPasswordSchema,
        onSubmit: values => {
          dispatch(resetPassword({token:getToken, password:values.password})).then(() => {
            
              navigate("/login");
            
          });
        },
      });

  return (
    <>
      <Meta title={'Reset Password'}/>
        <BreadCrumb title="Reset Password"
        />

        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15' >
                        <div className='mt-1'>
                              <input type='password'
                              name='password'
                              placeholder='New Password'
                              className='form-control'
                              onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur('password')}
                                value={formik.values.password}
                                />
                            </div>
                            <div className='error'>
                                {formik.touched.password && formik.errors.password}
                            </div>
                          {/* <div className='mt-1'>
                              <input type='password'
                              name='confpassword'
                              placeholder='Confirm Password'
                              className='form-control'
                              />
                          </div> */}

                          <div>
                              

                              <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                  <button type="submit" className='button border-0'>Save</button>
                                  
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

export default ResetPassword
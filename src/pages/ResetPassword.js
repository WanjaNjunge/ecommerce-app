import React from 'react'
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';


const ResetPassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'}/>
        <BreadCrumb title="Forgot Password"
        />

        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-15' >
                        <div className='mt-1'>
                              <input type='password'
                              name='password'
                              placeholder='New Password'
                              className='form-control'
                              />
                          </div>
                          <div className='mt-1'>
                              <input type='password'
                              name='confpassword'
                              placeholder='Confirm Password'
                              className='form-control'
                              />
                          </div>

                          <div>
                              

                              <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                  <button className='button border-0'>Save</button>
                                  
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
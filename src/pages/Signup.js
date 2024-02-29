import React from 'react'
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';


const Signup = () => {
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
                        <form action='' className='d-flex flex-column gap-15' >
                          <div>
                              <input type='text'
                              name='name'
                              placeholder='Username'
                              className='form-control'
                              />
                          </div>
                          <div>
                              <input type='email'
                              name='email'
                              placeholder='Email address'
                              className='form-control'
                              />
                          </div>
                          <div className='mt-1'>
                              <input type='password'
                              name='password'
                              placeholder='Password'
                              className='form-control'
                              />
                          </div>

                          <div>
                              

                              <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                  <button className='button border-0'>Sign Up</button>
                                  
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
import React from 'react';
import Container from '../components/Container';
import { useFormik } from 'formik';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../features/user/userSlice';

const verifySchema = yup.object({
 code: yup.string().required('Verification code is required'),
});

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userState  = useSelector((state) => state?.auth?.createdUser);
  const formik = useFormik({
    initialValues: {
      email: userState?.email,
      code: '',
    },
    validationSchema: verifySchema,
    onSubmit: (values) => {
      console.log('====================================');
      console.log(values);
      console.log('====================================');
      dispatch(verifyUser(values)).then(() => {
            
        navigate("/login");
      
    });
    },
  });

  return (
    <>
      <Meta title={'Verify Account'} />
      <BreadCrumb title="Verify Account" />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Verify Account</h3>
              <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input
                    type='text'
                    name='code'
                    placeholder='Verification Code'
                    className='form-control'
                    value={formik.values.code}
                    onChange={formik.handleChange('code')}
                    onBlur={formik.handleBlur('code')}
                  />
                </div>
                <div className='error'>{formik.touched.code && formik.errors.code}</div>

                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                  <button type='submit' className='button border-0'>
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Verify;

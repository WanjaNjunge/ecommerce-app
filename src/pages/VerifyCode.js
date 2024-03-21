import React from 'react';
import Container from '../components/Container';
import { useFormik } from 'formik';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import * as yup from 'yup';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../features/user/userSlice';

const verifySchema = yup.object({
 verificationCode: yup.string().required('Verification code is required'),
});

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verificationEmail = localStorage.getItem('verificationEmail');

  
  const formik = useFormik({
    initialValues: {  
      verificationCode: '',
    },
    validationSchema: verifySchema,
    onSubmit: (values) => {
      dispatch(verifyUser({email: verificationEmail, verificationCode: values.verificationCode}))
      .then((action) => {
        const userState = action.payload.data; 
        if (userState?.isEmailVerified === true) {
          navigate("/login");
        }
      });
    },
  });
  
  
  // useEffect(() => {
  //   if (userState.isEmailVerified === true) {
  //     navigate("/login");
  //   }
  // }, [userState, navigate]);
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
                    name='verificationCode'
                    placeholder='Verification Code'
                    className='form-control'
                    value={formik.values.verificationCode}
                    onChange={formik.handleChange('verificationCode')}
                    onBlur={formik.handleBlur('verificationCode')}
                  />
                </div>
                <div className='error'>{formik.touched.verificationCode && formik.errors.verificationCode}</div>

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

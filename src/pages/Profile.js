import React, { useState } from 'react'
import Container from '../components/Container'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserDetails } from '../features/user/userSlice';
import { FaRegEdit } from "react-icons/fa";

const profileSchema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email("Invalid Email Address").required("Email is required"),
    
  });

const Profile = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state=>state?.auth?.user)

    const [edit, setEdit] = useState(true)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: userState?.username,
            email: userState?.email,
          
        },
        validationSchema: profileSchema,
        onSubmit: values => {
            dispatch(updateUserDetails(values));
            setEdit(true);
          },
      });
  return (
    <>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
    <div className='row'>
        <div className='col-12'>
            <div className='d-flex justify-content-between align-items-center'>
            <h3 className='my-3'>Update Profile</h3>
            <FaRegEdit className='fs-3' onClick={()=>setEdit(false)} />
            </div>
        </div>
        <div className='col-12'>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="example1" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" disabled={edit} id="example1" value={formik.values.username} onChange={formik.handleChange("username")}
                                            onBlur={formik.handleBlur('username')} />
                </div>
                <div className='error'>
                    {formik.touched.username && formik.errors.username}
                </div>
                <div className="mb-3">
                    <label htmlFor="examplel2" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" disabled={edit} id="example2" aria-describedby="emailHelp" value={formik.values.email} onChange={formik.handleChange("email")}
                                            onBlur={formik.handleBlur('email')} />
                </div>
                <div className='error'>
                    {formik.touched.email && formik.errors.email}
                </div>
                
                
                {
                    edit === false && <button type="submit" className="btn btn-primary">Save</button>
                }
            </form>
        </div>
    </div>
    </Container>
    </>
  )
}

export default Profile
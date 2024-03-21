import React, { useEffect, useState } from 'react'
import Container from '../components/Container';
// import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import watch from "../assets/images/watch.jpg";
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createAnOrder, emptyCart, getCartDetails } from '../features/user/userSlice';


const billingInfoSchema = yup.object({
  firstname: yup.string().required("Email is required"),
  lastname: yup.string().required( "lastname is required"),
  county: yup.string().required( "county is required"),
  city: yup.string().required( "city is required"),
  address: yup.string().required( "address is required"),
  pincode: yup.number().required( "pincode is required"),
  phonenumber: yup.number().required( "phonenumber is required"),
  email: yup.string().email("Invalid Email Address").required("Email is required"),
  other: yup.string(),
  
});


const Checkout = (/*{ initialSubtotal }*/) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(null);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [cartProductState, setCartProductState] = useState([]);
  const cartState = useSelector(state=>state?.auth?.cartProducts);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
        sum = sum +(Number(cartState[index].quantity)*cartState[index].price)
        setTotalAmount(sum)
    }
  }, [cartState]);

  useEffect(() => {
    let items=[]
    for (let index = 0; index < cartState?.length; index++) {
        items.push({product:cartState[index].productId._id, quantity:cartState[index].quantity, price:cartState[index].price})
    }
    setCartProductState(items)
  }, [cartState]);

  useEffect(() => {
    dispatch(getCartDetails());
}, [dispatch]);

  const handleDeliveryChange = (amount) => {
    setDeliveryPrice(amount);
  };
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      county: '',
      city: '',
      address: '',
      pincode: '',
      phonenumber: '',
      email: '',
      ordernotes: '',
      apartment: '',
    },
    validationSchema: billingInfoSchema,
    onSubmit: async (values) => {
      try {
        dispatch(
          createAnOrder({
            billingInfo: values,
            orderItems: cartProductState,
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount + deliveryPrice,
            paymentInfo: {},
          })
        );
        dispatch(emptyCart());

        // Navigate to payment page after creating the order
        // navigate('/payment');
      } catch (error) {
        console.error('Error creating order:', error);
        // Handle error
      }
    },
  });
   
  

  

  return <>
    <Container class1='checkout-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-7'>
            <div className='checkout-left-data'>
              <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item total"><Link to='/cart' className='text-dark'>Shopping Cart</Link></li>
                  &nbsp; /
                  <li className="breadcrumb-item total active" aria-current="page">Checkout Details</li>
                  &nbsp; /
                  <li className="breadcrumb-item total"><Link to='/' className='text-dark'>Payment</Link></li>
                  
                </ol>
              </nav>
              <h4 className='total-price'>BILLING DETAILS</h4>
              <form action="" onSubmit={formik.handleSubmit} className='d-flex gap-15 flex-wrap justify-content-between'>
                <div>
                  <input type="text" className='form-control'  placeholder='First Name' name='firstname' onChange={formik.handleChange("firstname")}
                              onBlur={formik.handleBlur('firstname')}
                                value={formik.values.firstname} />
                </div>
                <div className='error'>
                                {formik.touched.firstname && formik.errors.firstname}
                            </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Last Name' name='lastname' onChange={formik.handleChange("lastname")}
                              onBlur={formik.handleBlur('lastname')}
                                value={formik.values.lastname} />
                </div>
                <div className='error'>
                                {formik.touched.lastname && formik.errors.lastname}
                            </div>
                <div className='w-100'>
                  <select id="county" name="county" className="form-control" onChange={formik.handleChange("county")}
                              onBlur={formik.handleBlur('county')}
                                value={formik.values.county}>
                  <option value="" disabled>Select County</option>
      <option value="baringo">Baringo</option>
      <option value="bomet">Bomet</option>
      <option value="bungoma">Bungoma</option>
      <option value="busia">Busia</option>
      <option value="elgeyo marakwet">Elgeyo Marakwet</option>
      <option value="embu">Embu</option>
      <option value="garissa">Garissa</option>
      <option value="homa bay">Homa Bay</option>
      <option value="isiolo">Isiolo</option>
      <option value="kajiado">Kajiado</option>
      <option value="kakamega">Kakamega</option>
      <option value="kericho">Kericho</option>
      <option value="kiambu">Kiambu</option>
      <option value="kilifi">Kilifi</option>
      <option value="kirinyaga">Kirinyaga</option>
      <option value="kisii">Kisii</option>
      <option value="kisumu">Kisumu</option>
      <option value="kitui">Kitui</option>
      <option value="kwale">Kwale</option>
      <option value="laikipia">Laikipia</option>
      <option value="lamu">Lamu</option>
      <option value="machakos">Machakos</option>
      <option value="makueni">Makueni</option>
      <option value="mandera">Mandera</option>
      <option value="meru">Meru</option>
      <option value="migori">Migori</option>
      <option value="marsabit">Marsabit</option>
      <option value="mombasa">Mombasa</option>
      <option value="muranga">Muranga</option>
      <option value="nairobi">Nairobi</option>
      <option value="nakuru">Nakuru</option>
      <option value="nandi">Nandi</option>
      <option value="narok">Narok</option>
      <option value="nyamira">Nyamira</option>
      <option value="nyandarua">Nyandarua</option>
      <option value="nyeri">Nyeri</option>
      <option value="samburu">Samburu</option>
      <option value="siaya">Siaya</option>
      <option value="taita taveta">Taita Taveta</option>
      <option value="tana river">Tana River</option>
      <option value="tharaka nithi">Tharaka Nithi</option>
      <option value="trans nzoia">Trans Nzoia</option>
      <option value="turkana">Turkana</option>
      <option value="uasin gishu">Uasin Gishu</option>
      <option value="vihiga">Vihiga</option>
      <option value="wajir">Wajir</option>
      <option value="pokot">West Pokot</option>
                  </select>
                </div>
                <div className='error'>
                                {formik.touched.county && formik.errors.county}
                            </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Town/City' name='city' onChange={formik.handleChange("city")}
                              onBlur={formik.handleBlur('city')}
                                value={formik.values.city} />
                </div>
                <div className='error'>
                                {formik.touched.city && formik.errors.city}
                            </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Postcode/ZIP' name="pincode" onChange={formik.handleChange("pincode")}
                              onBlur={formik.handleBlur('pincode')}
                                value={formik.values.pincode} />
                </div>
                <div className='error'>
                                {formik.touched.pincode && formik.errors.pincode}
                            </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Street Address' name='address' onChange={formik.handleChange("address")}
                              onBlur={formik.handleBlur('address')}
                                value={formik.values.address} />
                </div>
                <div className='error'>
                                {formik.touched.address && formik.errors.address}
                            </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Apartment/Suite (optional)' name="apartment" onChange={formik.handleChange("apartment")}
                              onBlur={formik.handleBlur('apartment')}
                                value={formik.values.apartment} />
                </div>
                <div className='error'>
                                {formik.touched.apartment && formik.errors.apartment}
                            </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Phone Number' name='phonenumber' onChange={formik.handleChange("phonenumber")}
                              onBlur={formik.handleBlur('phonenumber')}
                                value={formik.values.phonenumber} />
                </div>
                <div className='error'>
                                {formik.touched.phonenumber && formik.errors.phonenumber}
                            </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Email Address' name='email' onChange={formik.handleChange("email")}
                              onBlur={formik.handleBlur('email')}
                                value={formik.values.email} />
                </div>
                <div className='error'>
                                {formik.touched.email && formik.errors.email}
                            </div>
                <div>
                      <textarea
                      name='ordernotes'
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Order notes (optional)'
                      
                      onChange={formik.handleChange("ordernotes")}
                      onBlur={formik.handleBlur('ordernotes')}
                      value={formik.values.ordernotes} ></textarea>
                    </div>
                    <div className='error'>
                                {formik.touched.ordernotes && formik.errors.ordernotes}
                            </div>
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/cart' className='text-dark'><IoIosArrowBack /> Return to Cart</Link>
                    <button className='button' type='submit'>Place Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-5'>
            <div className='border-bottom py-4'>
            {
              cartState && cartState?.map((item, index)=>{
                return(
                  <div key={index} className='d-flex gap-10 mb-2 align-items-center'>
                <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative'>
                    <span style={{top: "-10px", right: "2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>{item?.quantity}</span>
                    <img className='img-fluid' src={watch} alt='product'/>
                  </div>
                  <div>
                    <h5 className='title total'>{item?.productId?.title}</h5>
                    <p className='total'>{item?.productId?.brand}</p>
                  </div>
                </div>
                
                <div className='flex-grow-1'>
                  <h5 className='total-price'>KSh. {item?.price * item?.quantity}</h5>
                </div>
              </div>
                )
              })
            }
              
            </div>
            <div className='border-bottom py-4'>
            <div className='d-flex justify-content-between align-items-center border-bottom'>
              <p className='total'>Subtotal</p>
              <h5 className='total-price'>KSh. {totalAmount ? totalAmount : 0}</h5>
            </div>
            <div className='mb-4 mt-3'>
              <p className='total'>Delivery</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                  defaultChecked
                  onChange={() => handleDeliveryChange(0)}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Self Pickup
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                  onChange={() => handleDeliveryChange(100)}
                   />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Nairobi CBD: <span className='delivery-price'>KShs 100.00</span>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                  onChange={() => handleDeliveryChange(200)}
                   />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Pick up mtaani: <span className='delivery-price'>KShs 200.00</span>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                  onChange={() => handleDeliveryChange(550)}
                   />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Rest of Kenya: <span className='delivery-price'>KShs 550.00</span>
                  </label>
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>KSh. {totalAmount ? totalAmount + deliveryPrice : 0}</h5>
            </div>
          </div>
        </div>
    </Container>
  </>
}

export default Checkout;
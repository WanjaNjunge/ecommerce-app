import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import watch from "../assets/images/watch.jpg"

const Checkout = (/*{ initialSubtotal }*/) => {
    // const [subtotal, setSubtotal] = useState(initialSubtotal);
    
  
    // const handleDeliveryChange = (amount) => {
    //   setSubtotal(initialSubtotal + amount);
    // };
    


  return <>
    <div className='checkout-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
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
              <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                <div>
                  <input type="text" className='form-control'  placeholder='First Name' />
                </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Last Name' />
                </div>
                <div className='w-100'>
                  <select id="county"     name="county"   className="form-control">
                  <option value="" selected disabled>Select County</option>
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
                <div>
                  <input type="text" className='form-control'  placeholder='Town/City' />
                </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Postcode/ZIP' />
                </div>
                
                <div>
                  <input type="text" className='form-control'  placeholder='Street Address' />
                </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Apartment/Suite (optional)' />
                </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Phone Number' />
                </div>
                <div>
                  <input type="text" className='form-control'  placeholder='Email Address' />
                </div>
                <div>
                      <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Order notes (optional)'
                      ></textarea>
                    </div>
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/cart' className='text-dark'><IoIosArrowBack /> Return to Cart</Link>
                    <Link to='/payment' className='button'>Place Order</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-5'>
            <div className='border-bottom py-4'>
              <div className='d-flex gap-10 mb-2 align-items-center'>
                <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative'>
                    <span style={{top: "-10px", right: "2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                    <img className='img-fluid' src={watch} alt='product'/>
                  </div>
                  <div>
                    <h5 className='title total'>Watch</h5>
                    <p className='total'>Smart watch</p>
                  </div>
                </div>
                
                <div className='flex-grow-1'>
                  <h5 className='total-price'>$ 500</h5>
                </div>
              </div>
            </div>
            <div className='border-bottom py-4'>
            <div className='d-flex justify-content-between align-items-center border-bottom'>
              <p className='total'>Subtotal</p>
              <h5 className='total-price'>$ 9000{/*{subtotal}*/}</h5>
            </div>
            <div className='mb-4 mt-3'>
              <p className='total'>Delivery</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                  checked
                  // onChange={() => handleDeliveryChange(0)} 
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                  Self Pickup
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked
                  // onChange={() => handleDeliveryChange(100)}
                   />
                  <label className="form-check-label" for="flexRadioDefault2">
                  Nairobi CBD: <span className='delivery-price'>KShs 100.00</span>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked
                  // onChange={() => handleDeliveryChange(200)}
                   />
                  <label className="form-check-label" for="flexRadioDefault2">
                  Pick up mtaani: <span className='delivery-price'>KShs 200.00</span>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                  // onChange={() => handleDeliveryChange(550)}
                   />
                  <label className="form-check-label" for="flexRadioDefault2">
                  Rest of Kenya: <span className='delivery-price'>KShs 550.00</span>
                  </label>
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>$ 10000{/*{subtotal}*/}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Checkout;
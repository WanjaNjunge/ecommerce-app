import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
// import compareImg from '../assets/images/compare.svg';
import wishListImg from '../assets/images/wishlist.svg';
import userImg from '../assets/images/user.svg';
import cartImg from '../assets/images/cart.svg';
import menuImg from '../assets/images/menu.svg';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../features/products/productSlice';
// import { getCartDetails } from '../features/user/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    // const [total, setTotal] = useState(null);
    const cartState = useSelector(state=>state?.auth?.cartProducts);
    const authState = useSelector((state) => state?.auth);
    const productState = useSelector(state=>state?.product?.product);
    const [productOpt, setProductOpt] = useState([]);

    const totalQuantity = cartState ? cartState.reduce((total, item) => total + item.quantity, 0) : 0;

    
    // const [paginate, setPaginate] = useState(true);

    // useEffect(() => {
    //   dispatch(getCartDetails());
    // }, [dispatch]);

    // useEffect(() => {
    //   let sum = 0;
    //   for (let index = 0; index < cartState?.length; index++) {
    //       sum = sum +(Number(cartState[index].quantity)*cartState[index].price)
    //       setTotal(sum)
    //   }
    // }, [cartState]);


    useEffect(()=>{
      let data = [];
      for (let index = 0; index < productState.length; index++) {
        const element = productState[index];
        data.push({id:index, prod:element?._id, name:element?.title})
      }

      setProductOpt(data)
    }, [productState])


    const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
    }

  return (
    <>
      <header className='header-top-strip py-3 '>
        <div className='container-xxl'>
          <div className='row '>
            <div className="col-6 mb-3">
              <p className='text-white mb-0'>Same Day In-store Pickup or Express Delivery</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white'>
              Hotline: 
              <a className='text-white' href='tel:+254700000000'>+254 700000000</a>
              </p>
            </div>
          </div>
        </div>

      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className="col-2">
              <h2>
                <Link className='text-white'>Logo</Link>
              </h2>
            </div>
            <div className="col-5">
            <div className="input-group">
              <Typeahead
                id="pagination-example"
                // onPaginate={() => console.log('Results paginated')}
                onChange={(selected) => {
                  if (selected && selected.length > 0) {
                    navigate(`/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod))
                  }
                }}
                labelKey={"name"}
                options={productOpt}
                // paginate={paginate}
                minLength={2}
                placeholder="Search for products here..."
              />
              <span className="input-group-text p-3" id="basic-addon2">
              <BsSearch className='fs-6' />
              </span>
            </div>
            </div>
            <div className="col-5">
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                {/* <div>
                  <Link to='/compare-product' 
                    className='d-flex align-items-center gap-10 text-white mx-4'>
                    <img src={compareImg} alt='compare'/>
                    <p className='mb-0'>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div> */}
                <div>
                  <Link to={authState.user === null  ? '/login' : '/wishlist'}
                    className='d-flex align-items-center gap-10 text-white mx-4'>
                    <img src={wishListImg} alt='wishlist' />
                    <p className='mb-0'>
                      View <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='cart'
                   className='d-flex align-items-center gap-10 text-white mx-4'>
                    <img src={cartImg} alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>{totalQuantity}</span>
                    {/* <p className='mb-0 mx-2'>KSh. {total ? total : 0}</p> */}

                    </div>
                  </Link>
                </div>
                <div>
                  <div className='d-flex align-items-center gap-10 text-white mx-4 ' 
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <img src={userImg} alt='user' />
                    <p className='mb-0'>
                      {authState.user === null ? (
                        <>
                          Login <br /> Sign Up
                        </>
                      ) : (
                        `Welcome ${authState?.user?.username}`
                      )}
                    </p>
                  </div>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {authState?.user === null ? (
                      <>
                        <Link to="/login" className="dropdown-item">Login</Link>
                        <Link to="/signup" className="dropdown-item">Sign Up</Link>
                      </>
                    ) : (
                      <>
                        <Link to="/my-profile" className="dropdown-item">View Profile</Link>
                        <Link className="dropdown-item" onClick={handleLogout}>Logout</Link>
                      </>
                    )}
                  </div>
                  {/* <Link
                    to={authState.user === null ? '/login' : '/my-profile'}
                    className='d-flex align-items-center gap-10 text-white mx-4'
                  >
                    <img src={userImg} alt='user' />
                    <p className='mb-0'>
                      {authState.user === null ? (
                        <>
                          Login <br /> Sign Up
                        </>
                      ) : (
                        `Welcome ${authState?.user?.username}`
                      )}
                    </p>
                  </Link> */}
                </div>
                
                {/* <div className='mx-4'>
                  {authState?.user !== null && (
                    <button onClick={handleLogout} type='button' className='button border-0'>Logout</button>
                  )}
                </div> */}
              </div>
              
            </div>
          </div>
        </div>


      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30 mt-2'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={menuImg} alt='menu'/>
                      <span className='me-5 d-inline-block'>
                      Product Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                      <Link className="dropdown-item text-white" to="">
                      Laptops
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item text-white" to="">
                      Monitors
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item text-white" to="">
                      Desktops
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item text-white" to="">
                      Printers & Scanners
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item text-white" to="">
                      CCTV Cameras
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item text-white" to="">
                      Networking
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item text-white" to="">
                      Accessories
                      </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  <NavLink to="/my-orders">My Orders</NavLink>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
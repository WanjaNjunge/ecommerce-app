import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';
import { addProdToCart, getCartDetails, updateCartProd } from '../features/user/userSlice';
import ReactStars from 'react-rating-stars-component';
import viewImg from '../assets/images/view.svg';
import addCartImg from '../assets/images/add-cart.svg';
import wishListImg from '../assets/images/wish.svg';
import { FcLike } from 'react-icons/fc';

const getWishlistfromLocalStorage = localStorage.getItem('wishlist')
  ? JSON.parse(localStorage.getItem('wishlist'))
  : [];

const ProductCard = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  const { grid, data } = props;
  const dispatch = useDispatch();

  const [wishlist, setWishlist] = useState(getWishlistfromLocalStorage);

  useEffect(() => {
    dispatch(getCartDetails());
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const userCartState = useSelector((state) => state?.auth?.cartProducts);


  const addToCart = (productId, price) => {
    const existingItem = userCartState.find((item) => item.productId._id === productId);
    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;
      dispatch(updateCartProd({ cartItemId: existingItem._id, quantity: newQuantity }));
      setTimeout(() => {
        dispatch(getCartDetails());
      }, 200);
    } else {
      dispatch(addProdToCart({ productId, quantity: 1, price }));
      setTimeout(() => {
        dispatch(getCartDetails());
      }, 200);
    }
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      dispatch(addToWishlist(id));
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      dispatch(addToWishlist(id));
      setWishlist([...wishlist, id]);
    }
  };
 
  return (
    <>
      {Array.isArray(data) &&
        data?.map((item, index) => {
          const isWishlist = wishlist.includes(item?._id);
          return (
            <div key={index} className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <button className="border-0 bg-transparent" onClick={(e) => toggleWishlist(item?._id)}>
                    {isWishlist ? <FcLike /> : <img src={wishListImg} alt="wish list" />}
                    
                  </button>
                </div>
                <div className="product-image" onClick={() => navigate(`/product/${item?._id}`)} src={viewImg} alt="view">
                  <img className="img-fluid mx-auto" src={item?.images[0]?.url} alt="product" />
                  <img className="img-fluid mx-auto" src={item?.images[1]?.url} alt="product" />
                </div>
                <div className="product-details mt-3" onClick={() => navigate(`/product/${item?._id}`)} src={viewImg} alt="view">
                  <h6 className="brand">{item?.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars count={5} size={24} value={parseFloat(item?.totalrating)} edit={false} activeColor="#ffd700" />
                  <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`} dangerouslySetInnerHTML={{ __html: item?.description }}></p>
                  <p className="price">KSh. {item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <button onClick={() => addToCart(item?._id, item?.price)} className="border-0 bg-transparent">
                      <img src={addCartImg} alt="add cart" />
                    </button>
                    <button onClick={() => navigate(`/product/${item?._id}`)} className="border-0 bg-transparent">
                      <img src={viewImg} alt="view" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;

import axios from "axios";
import { base_url, api } from "../../utils/axiosConfig";

const register = async(data)=>{
    const response = await axios.post(`${base_url}user/register`, data);
    if (response.data) {
        return response.data;
    }
};
const verifyCode = async(data)=>{
  const response = await axios.post(`${base_url}user/verify-user`, { email:data?.email, verificationCode:data?.verificationCode });
  if (response.data) {
    return response.data;
}
};
const login = async(userData)=>{
    const response = await axios.post(`${base_url}user/login`, userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
        
        return response.data;
    }
};

// const getUserWishlist = async()=>{
//     const response = await axios.get(`${base_url}user/wishlist`, config);
//     if (response.data) {
//         return response.data;
//     }
// };
const getUserWishlist = async () => {
    const response = await api.get("user/wishlist");
    if (response.data) {
      return response.data;
    }
  };
// const addToCart = async(cartData)=>{
//     const response = await axios.post(`${base_url}user/cart`, cartData, config);
//     if (response.data) {
//         return response.data;
//     }
// };
const addToCart = async (cartData) => {
    const response = await api.post("user/cart", cartData);
    if (response.data) {
      return response.data;
    }
  };
// const getCart = async()=>{
//     const response = await axios.get(`${base_url}user/cart`, config);
//     if (response.data) {
//         return response.data;
//     }
// };
const getCart = async () => {
    const response = await api.get("user/cart");
    if (response.data) {
      return response.data;
    }
  };
// const removeProdFromCart = async(cartItemId)=>{
//     const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`, config);
    
//     if (response.data) {
//         return response.data;
//     }
// };
const removeProdFromCart = async (cartItemId) => {
    const response = await api.delete(`user/delete-product-cart/${cartItemId}`);
    if (response.data) {
      return response.data;
    }
  };
// const updateProdFromCart = async(cartDetail)=>{
    
//     const response = await axios.patch(`${base_url}user/update-product-cart/${cartDetail.cartItemId}`, { newQuantity: cartDetail.quantity }, config);
    
//     if (response.data) {
//         return response.data;
//     }
// };
const updateProdFromCart = async (cartDetail) => {
    const response = await api.patch(
      `user/update-product-cart/${cartDetail.cartItemId}`,
      { newQuantity: cartDetail.quantity }
    );
    if (response.data) {
      return response.data;
    }
  };
// const createOrder = async(orderDetail)=>{
    
//     const response = await axios.post(`${base_url}user/cart/create-order`, orderDetail, config);
    
//     if (response.data) {
//         return response.data;
//     }
// };
const createOrder = async (orderDetail) => {
    const response = await api.post("user/cart/create-order", orderDetail);
    if (response.data) {
      return response.data;
    }
  };
// const getUserOrders = async()=>{
    
//     const response = await axios.get(`${base_url}user/get-my-orders`, config);
    
//     if (response.data) {
//         return response.data;
//     }
// };
const getUserOrders = async () => {
    const response = await api.get("user/get-my-orders");
    if (response.data) {
      return response.data;
    }
  };
// const updateUser = async(userDetail)=>{
    
//     const response = await axios.put(`${base_url}user/edit-user`, userDetail, config);
    
//     if (response.data) {
//         return response.data;
//     }
// };
const updateUser = async (userDetail) => {
    const response = await api.put("user/edit-user", userDetail);
    if (response.data) {
      return response.data;
    }
  };

const forgotPassToken = async(data)=>{
    
    const response = await axios.post(`${base_url}user/forgot-password-token`, data);
    
    if (response.data) {
        return response.data;
    }
};
const resetPass = async(data)=>{
    
    const response = await axios.put(`${base_url}user/reset-password/${data?.token}`, {password: data?.password});
    
    if (response.data) {
        return response.data;
    }
};


export const authService={
    register,
    verifyCode,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProdFromCart,
    updateProdFromCart,
    createOrder,
    getUserOrders,
    updateUser,
    forgotPassToken,
    resetPass
}
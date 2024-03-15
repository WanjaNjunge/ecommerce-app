import axios from "axios";
import { base_url, api } from "../../utils/axiosConfig";


const getProducts = async (data) => {;
  const brandParam = data?.selectedBrand ? `brand=${data.selectedBrand}` : '';
  const tagParams = data?.selectedTag.length ? `tags=${data.selectedTag.join(',')}` : '';
  const categoryParam = data?.selectedCategory ? `category=${data.selectedCategory}` : '';
  const minPriceParam = data?.minPrice ? `price[gte]=${data.minPrice}` : '';
  const maxPriceParam = data?.maxPrice ? `price[lte]=${data.maxPrice}` : '';
  const sortParam = data?.sort ? `sort=${data.sort}` : '';
  const queryParams = [brandParam, tagParams, categoryParam, minPriceParam, maxPriceParam, sortParam].filter(Boolean).join('&');

  const url = `${base_url}product?${queryParams}`;
  const response = await axios.get(url);

  if (response.data) {
      return response.data;
  }
};

// const getProducts = async(data)=>{
//   console.log(data);
//     const response = await axios.get(`${base_url}product?${data?.selectedBrand?`brand=${data?.selectedBrand}&&`:""}`);
//     if (response.data) {
//         return response.data;
//     }
// };

const getSingleProduct = async(id)=>{
    const response = await axios.get(`${base_url}product/${id}`);
    if (response.data) {
        return response.data;
    }
};

// const addToWishlist = async(prodId)=>{
//     const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
//     if (response.data) {
//         return response.data;
//     }
// }
const addToWishlist = async (prodId) => {
    const response = await api.put("product/wishlist", { prodId });
    if (response.data) {
      return response.data;
    }
  };

  const rateProduct = async (data) => {
    const response = await api.put("product/rating", data);
    if (response.data) {
      return response.data;
    }
  };

export const productService={
    getProducts,
    addToWishlist,
    getSingleProduct,
    rateProduct
}
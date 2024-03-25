import React, { useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import Meta from '../components/Meta';
// import ReactStars from "react-rating-stars-component";
// import watchImg from '../assets/images/watch.jpg';
import gridImg1 from '../assets/images/gr.svg';
import gridImg2 from '../assets/images/gr2.svg';
import gridImg3 from '../assets/images/gr3.svg';
import gridImg4 from '../assets/images/gr4.svg';
// import Color from '../components/Color';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'; 
import { getAllProducts } from '../features/products/productSlice';

const OurStore = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [grid, setGrid] = useState(4);
  const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);



    // FILTER STATES
    const [selectedTag, setSelectedTag] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sort, setSort] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    
    

    const productState = useSelector((state) => state?.product?.product);

    
    


    const getProducts = useCallback(() => {
      dispatch(getAllProducts({sort, maxPrice, minPrice, selectedBrand, selectedCategory, selectedTag, searchTerm}));
    }, [dispatch, sort, maxPrice, minPrice, selectedBrand, selectedCategory, selectedTag, searchTerm]);
  
    
    useEffect(() => {
      getProducts();
    }, [getProducts, sort, maxPrice, minPrice, selectedBrand, selectedCategory, selectedTag]);
    

    


    useEffect(() => {
      let newBrands=[];
      let newCategories=[];
      let newTags=[];
      for (let index = 0; index < productState?.length; index++) {
        const element = productState[index];
          newBrands.push(element.brand);
          newCategories.push(element.category);
          newTags.push(element.tags);
      }
      setBrands(newBrands);
      setCategories(newCategories);
      setTags(newTags);
    }, [productState]);

    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const category = searchParams.get('category');
      const searchTerm = searchParams.get('search');
    
      if (category) {
        setSelectedCategory(category);
      }
    
      if (searchTerm) {
        setSearchTerm(searchTerm);
      }
    }, [location.search]);

    
    
  return (
    <>
      <Meta title={'Our Store'}/>
      <BreadCrumb title="Our Store" />

      <Container class1='store-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Browse Categories</h3>
                <div>
                  <ul className='ps-0'>
                  {
                      categories && [...new Set(categories)].map((item,index)=>{
                        return (
                          <li key={index} onClick={()=>{
                            setSelectedCategory(item)
                          }} className={`text-capitalize${item === selectedCategory ? ' active' : ''}`}>{item}</li>
                        )
                      })
                    }
                    
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  {/* IN STOCK FILTER
                  <h5 className='sub-title'>
                    Availability
                  </h5>

                  <div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label
                      className='form-check-label'
                      htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label
                      className='form-check-label'
                      htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div> */}

                  <h5 className='sub-title'>
                    Price
                  </h5>

                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input type="number" className="form-control" id="floatingInput" placeholder="From" onChange={(e)=>setMinPrice(e.target.value)} />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="number" className="form-control" id="floatingInput1" placeholder="To" onChange={(e)=>setMaxPrice(e.target.value)} />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>

                  {/* <h5 className='sub-title'>
                    Colors
                  </h5>

                  <div>
                    <Color />
                  </div>

                  <h5 className='sub-title'>
                    Size
                  </h5>

                  <div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id='color-1'
                      />
                      <label
                      className='form-check-label'
                      htmlFor="color-1">
                        S (2)
                      </label>
                    </div>

                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id='color-1'
                      />
                      <label
                      className='form-check-label'
                      htmlFor="color-1">
                        M (2)
                        </label>
                    </div>
                  </div> */}
                  <div className='mt-4 mb-3'>
                <h3 className='sub-title'>Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  
                    {
                      tags && [...new Set(tags)].map((item,index)=>{
                        return (
                          <li key={index} onClick={()=>{
                            setSelectedTag(item) 
                          }} className='text-capitalize'>{item}</li>
                        )
                      })
                      
                    }
                  </div>
                </div>
              </div>
              <div className='mt-4 mb-3'>
                <h3 className='sub-title'>Shop Brands</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <ul className='ps-0'>
                  {
                      brands && [...new Set(brands)].map((item,index)=>{
                        return (
                          <li key={index} onClick={()=>{
                            setSelectedBrand(item) 
                          }} className='text-capitalize'>{item}</li>
                        )
                      })
                      
                    }
                    
                  </ul>
                  
                  
                  </div>
                </div>
              </div>
                </div>
              </div>
              
              {/* <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    <div className='w-50'>
                      <img 
                        src={watchImg}
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img 
                        src={watchImg}
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex  justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                    <select name="" className="form-control form-select" id="" defaultValue="select-filter" onChange={(e)=>setSort(e.target.value)}>

                    <option value="select-filter">Select Filter</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'>21 Products</p>
                    <div className='d-flex align-items-center gap-10 grid'>
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                        className='d-block img-fluid'
                        src={gridImg4}
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        className='d-block img-fluid'
                        src={gridImg3}
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        className='d-block img-fluid'
                        src={gridImg2}
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        className='d-block img-fluid'
                        src={gridImg1}
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                <ProductCard data={productState} grid={grid} />
                {(!productState || productState.length === 0) && <p>No Products Available In The Store</p>}
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default OurStore;
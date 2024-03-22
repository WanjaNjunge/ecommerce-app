import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const SpecialProduct = (props) => {
    const navigate = useNavigate();
    const { title, brand, totalrating, price, id, images } = props;
  return (
    <div className='col-6 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className='img-fluid mx-auto' src={images} alt='product'/>
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>{brand}</h5>
                    <h6 className='title'>{title}</h6>
                    <ReactStars
                    count={5}
                    size={24}
                    value={totalrating}
                    edit={false}
                    activeColor="#ffd700"
                    />
                    <p className='price'>
                        <span className='red-p'>
                            KSh. {price}
                        </span> &nbsp; 

                        {/* <strike>KSh. {price}</strike> */}
                    </p>
                    {/* <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5 </b>days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>
                        </div>
                    </div> */}
                    {/* <div className='prod-count my-3'>
                        <p>Products: {stock}</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div> */}
                    <button className='button' onClick={()=>navigate("/product/"+id)} >
                        View
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct
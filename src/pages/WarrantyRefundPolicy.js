import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const WarrantyRefundPolicy = () => {
  return (
    <>
        <Meta title={'Warranty & Refund Policy'}/>
        <BreadCrumb title="Warranty & Refund Policy"
        />

<section className='policy-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WarrantyRefundPolicy
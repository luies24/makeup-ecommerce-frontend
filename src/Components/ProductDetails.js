import React from 'react'

export default function ProductDetails(){
    return(
        <div className='product-main'>
            <img 
                className='pd-img'
                src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-index-best-makeup-products-1614372277.jpg?crop=0.478xw:0.955xh;0.266xw,0.0256xh&resize=640:*' 
                alt='Product' />
            <div className='info-section'>
                <h1 className='pd-name'>Product Name</h1>
                <p className='pd-price'>$20.00</p>
                <button className='pd-btn'>Add to Cart</button>
                <p>Product Description</p>
            </div>
        </div>
    )
}
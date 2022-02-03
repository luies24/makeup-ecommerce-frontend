import React from 'react'

export default function ProductDetails(){
    return(
        <div className='product-main'>
            <img 
                src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-index-best-makeup-products-1614372277.jpg?crop=0.478xw:0.955xh;0.266xw,0.0256xh&resize=640:*' 
                alt='Product' />
            <div>
                <h1>Product Name</h1>
                <h4>Price</h4>
                <button>Add to Cart</button>
                <p>Product Description</p>
            </div>
        </div>
    )
}
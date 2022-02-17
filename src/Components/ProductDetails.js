import React from 'react'

export default function ProductDetails({ product }){
    return(
        <div className='product-main'>
            <img 
                className='pd-img'
                src={product.image_link}
                alt='Product' />
            <div className='info-section'>
                <h1 className='pd-name'>{product.name}</h1>
                <p className='pd-price'>${product.price}0</p>
                <button className='pd-btn'>Add to Cart</button>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
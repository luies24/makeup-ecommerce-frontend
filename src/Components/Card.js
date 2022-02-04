import React from 'react'

export default function Card(){
    return(
        <div className='product-card'>
                <img 
                    className='card-img'
                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-index-best-makeup-products-1614372277.jpg?crop=0.478xw:0.955xh;0.266xw,0.0256xh&resize=640:*'
                    alt='Makeup Product'    
                />
                <h3 className='price'>$20.00</h3>
                <button className='add-to-cart'>Add to Cart</button>
            </div>
    )
}
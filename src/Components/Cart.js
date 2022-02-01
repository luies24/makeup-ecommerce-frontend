import React from 'react'

export default function Cart(){
    return(
        <div className='cart-main'>
                <h1 className='cart-heading'>Your Cart</h1>
            <div className='item-section'>
                <img 
                    className='cart-img'
                    src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-index-best-makeup-products-1614372277.jpg?crop=0.478xw:0.955xh;0.266xw,0.0256xh&resize=640:*'
                    alt='Product images'
                />
                <h1>Product Name</h1>
                <button>Remove</button>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
            </div>
            <div className='checkout-cs-btn'>
                <button className='cart-btn'>Continue Shopping</button>
                <button className='cart-btn'>Check Out</button>
            </div>
        </div>
    )
}
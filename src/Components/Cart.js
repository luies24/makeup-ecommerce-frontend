import React from 'react'

export default function Cart(){
    return(
        <div className='cart-main'>
                <h1 className='cart-heading'>Your Cart</h1>
                <div className='section-headings'>
                    <h3>Product</h3>
                    <div className='pqt-heading'>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                    </div>
                </div>
            <div className='item-section'>
                <div className='cart-img-name-remove'>
                    <img 
                        className='cart-img'
                        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-index-best-makeup-products-1614372277.jpg?crop=0.478xw:0.955xh;0.266xw,0.0256xh&resize=640:*'
                        alt='Product images'
                    />
                    <div className='item-name-remove'>
                        <h1 className='product-name'>Product Name</h1>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='price-qty-total'>
                    <h3 className='price'>$20.00</h3>
                    <h3>Quantity</h3>
                    <h3>$20.00</h3>
                </div>
            </div>
            <div className='checkout-cs-btn'>
                <button className='cart-btn'>Continue Shopping</button>
                <button className='cart-btn'>Check Out</button>
            </div>
        </div>
    )
}
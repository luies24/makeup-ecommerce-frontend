import React from 'react'
import CartItem from './CartItem'

export default function Cart({ cart }){
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
                {cart.map(product => 
                    <CartItem
                        key={product.id}
                        product={product}
                    />
                )}
            </div>
            <div className='checkout-cs-btn'>
                <button className='cart-btn'>Continue Shopping</button>
                <button className='cart-btn'>Check Out</button>
            </div>
        </div>
    )
}
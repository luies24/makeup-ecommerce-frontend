import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export default function Cart({ cart, removeCartItem }){

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
            <div className='item-section-outer'>
                {cart.map(product => 
                    <CartItem
                        key={product.id}
                        product={product}
                        removeCartItem={removeCartItem}
                    />
                )}
            </div>
            <div className='checkout-cs-btn'>
                <Link to='/Products' className='cart-btn' id='cart-shopping'>
                    Continue Shopping
                </Link>
                <button className='cart-btn'>Check Out</button>
            </div>
        </div>
    )
}
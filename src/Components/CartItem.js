import React from 'react'

const CartItem = props => {

    const handleClick = (event) => {
        event.stopPropagation()
        props.removeCartItem(props.product)
    }

    const productPrice = Math.floor(Math.random() * 50)
    const itemTotal = productPrice * 1

    return(
        <div className='item-section'>
            <div className='cart-img-name-remove'>
                <img 
                    className='cart-img'
                    src={props.product.image_link}
                    alt='Product images'
                />
                <div className='item-name-remove'>
                    <h1 className='product-name'>{props.product.name}</h1>
                    <button className='remove-btn' onClick={handleClick}>
                        Remove
                    </button>
                </div>
            </div>
            <div className='price-qty-total'>
                <h3 className='price'>${productPrice}.00</h3>
                <h3>1</h3>
                <h3>${itemTotal}.00</h3>
            </div>
        </div>
    )
}

export default CartItem
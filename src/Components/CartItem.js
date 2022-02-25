import React from 'react'

const CartItem = props => {

    const handleClick = () => {
        
    }

    return(
        <>
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
                <h3 className='price'>${props.product.price}0</h3>
                <h3>Quantity</h3>
                <h3>$20.00</h3>
            </div>
        </>
    )
}

export default CartItem
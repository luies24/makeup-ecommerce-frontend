import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {

    const handleClick = () => {
        props.displayProductDetails(props.product)
    }

    const handleCartClick = (event) => {
        event.stopPropagation();
        props.cartList(props.product)
    }

    return(
        <div className='product-card' onClick={handleClick}>
            <Link className='Product-link' to='/ProductDetails'>
                <img 
                    className='card-img'
                    src={props.product.image_link}
                    alt='Makeup Product'    
                />
                <h3 className='price'>${props.product.price}0</h3>
                <button className='add-to-cart' onClick={handleCartClick}>Add to Cart</button>
            </Link>
        </div>
    )
}

export default Card;
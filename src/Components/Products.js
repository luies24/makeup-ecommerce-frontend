import React from 'react'
import Card from './Card'

export default function Products({inventory, displayProductDetails}){
    return(
        <div className='product-main'>
            {inventory.map(product =>
                <Card
                    key={product.id}
                    product={product}
                    displayProductDetails={displayProductDetails}
                    // cartList={cartList}
                />
            )}
        </div>
    )
}

            {/* <div className='product-card'>
                <img 
                    className='card-img'
                    src='https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769'
                    alt='Makeup Product'    
                />
                <h3 className='price'>$5.00</h3>
                <button className='add-to-cart'>Add to Cart</button>
            </div> */}
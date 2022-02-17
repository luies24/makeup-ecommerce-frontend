import React from 'react'
import Card from './Card'

export default function Products({inventory, displayProductDetails, cartList}){
    return(
        <div className='product-main'>
            {inventory.map(product =>
                <Card
                    key={product.id}
                    product={product}
                    displayProductDetails={displayProductDetails}
                    cartList={cartList}
                />
            )}
        </div>
    )
}
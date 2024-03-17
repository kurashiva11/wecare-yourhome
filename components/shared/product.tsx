import React from 'react'

const Product = ({name, price, image, description}: {name: string, price: number, image: string, description: string}) => {
    return (
        <div>Product: {name} : {price} : {image} : {description}</div>
      )
}

export default Product
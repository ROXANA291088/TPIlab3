import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className='products-container'>
      {
        products.map((product) => (
          <ProductItem
            id={product.id}
            name={product.name}
            type={product.type}
            colour={product.colour}
            size={product.size}
            price={product.price}
            uploadedDate={product.uploadedDate}
            img={product.img}
            description={product.description}
          />
        ))
      }
    </div>
  )
}

export default Products
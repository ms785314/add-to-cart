import React from 'react';
import './Product.css'
const Product = ({product}) => {
    const {username} = product;
    return (
        <div className='product'>
            <h1>{username}</h1>
           
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;
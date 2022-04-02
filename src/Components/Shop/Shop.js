import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json').then(res => res.json()).then(data => setData(data));
    },[])
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    data.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                
                <h1>cart container</h1>
            </div>
        </div>
    );
};

export default Shop;
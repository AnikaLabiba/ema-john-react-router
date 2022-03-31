import React from 'react';
import './Products.css'
const Product = (props) => {
    const { name, img, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <p><small>Price: ${price}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;
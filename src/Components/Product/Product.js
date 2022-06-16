import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, seller, star, stock, url} = props.product
    return (
        <div className='Product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <a href={url} target="_blank" className='product-name'>{name}</a>
                <div className='product-info2'>
                <p className='font-16'>by {seller}</p>
                    <p className='font-16'>Price: ${price}</p>                    
                    <p className='font-16'>{star}</p>                    
                </div>

                <div className='product-info2'>
                <div>
                    <p>only {stock} left in stock - order soon</p>
                    <button onClick={()=>props.handleAddToCart(props.product)} className='cart-btn'><FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
                </div>
                <div>

                </div>
            </div>
            </div>
        </div>  
    );
};

export default Product;
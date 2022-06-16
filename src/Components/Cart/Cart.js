import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price
    }
    return (
        <div>                
            <h2>Order Summary</h2>
            <p>Items Ordered: {props.cart.length} </p>
            <h4>Total : {total}</h4>
        </div>
    );
};

export default Cart;
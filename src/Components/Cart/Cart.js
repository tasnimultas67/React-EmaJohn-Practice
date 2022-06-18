import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let totalQuantity = 0;

    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) *0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>                
            <h2>Order Summary</h2>
            <p>Items Ordered: {totalQuantity} </p>
            <h4>Total : ${total}</h4>
            <h4>Shipping : ${shipping}</h4>
            <h4>Tax : ${tax}</h4>
            <h3>Grand Total : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;
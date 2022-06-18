import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch("products.JSON")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart()
        const storedCart = [];
        for(let key in savedCart){
            // console.log(key, savedCart[key])
            const addedProduct = products.find(product => product.key === key)
            // console.log(key, addedProduct);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                console.log(addedProduct);
            }
            storedCart.push(addedProduct)
        }
        setCart(storedCart)
        }
    },[products])


    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart)
        //save to local storage(for now)
        addToDb(product.key)
    }

    return (
        <div className="shop-container">

            <div className="product-container">
                                {
                    products.map(product =><Product key = {product.key} product={product} handleAddToCart={handleAddToCart}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};
//This is comment
export default Shop;
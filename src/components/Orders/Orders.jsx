import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import {useLoaderData} from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product=> <ReviewItem key={product.id} product={product}></ReviewItem>)
                }
                {/* <h1>Order page: {cart.length}</h1> */}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
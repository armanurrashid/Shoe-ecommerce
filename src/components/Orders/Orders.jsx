import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
const Orders = () => {
    const savedcart = useLoaderData();
    const [cart, setCart] = useState(savedcart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
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
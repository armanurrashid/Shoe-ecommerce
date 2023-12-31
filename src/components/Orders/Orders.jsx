import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedcart = useLoaderData();
    const [cart, setCart] = useState(savedcart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout  <FontAwesomeIcon icon={faMoneyCheckDollar} ></FontAwesomeIcon></button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Orders;
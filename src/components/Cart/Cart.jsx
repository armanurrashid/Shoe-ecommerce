import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Cart = ({cart}) => {
    console.log(cart);
    // const {cart} = props 
let total = 0;
for (const product of cart){
    total = total + product.price;
}
    return (
        <div className='cart'>
            <h3>Order</h3>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h4>Grand Total:  </h4>
            <button className='btn-clear-cart'><span>Clear Cart </span>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <button className='btn-review-cart'><span>Review Order </span>
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
            
        </div>
    );
};

export default Cart;
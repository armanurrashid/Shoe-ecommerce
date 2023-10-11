import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
let total = 0;
let total_shipping = 0;
const Cart = ({cart}) => {
for (const product of cart){
    total_shipping = total_shipping + product.shipping;
    total = total + product.price;
}
let total_tax = (total*7)/100
let total_grand = total + total_shipping + total_tax
    return (
        <div className='cart'>
            <h3>Order</h3>
            <hr />
            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${total_shipping}</p>
            <p>Tax: ${total_tax.toFixed(2)}</p>
            <h4>Grand Total: ${total_grand.toFixed(2)}</h4>
            <button className='btn-clear-cart'><span>Clear Cart </span>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <button className='btn-review-cart'><span>Review Order</span>
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
    
};
export default Cart;
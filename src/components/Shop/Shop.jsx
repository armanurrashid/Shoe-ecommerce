// import React from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step-1: get id of the addedproduct
        for (const id in storedCart) {
            //step:2 get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                //step-3: add quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                //step-4: add the added product to the saved cart
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to='/order'>
                        <button className='btn-proceed'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;
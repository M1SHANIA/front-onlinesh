import React from 'react';

const ShoppingCart = ({ onClose }) => (
    <div className="shopping-cart-container">
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {/* Здесь должен быть список товаров в корзине */}
            <button onClick={onClose} className="close-button">Close</button>
        </div>
    </div>
);

export default ShoppingCart;

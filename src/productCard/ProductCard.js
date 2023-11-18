import React from 'react';

const ProductCard = ({ title }) => (
    <div className="product-card">
        <h3>{title}</h3>
        {/* Добавьте дополнительную информацию о продукте если нужно */}
    </div>
);

export default ProductCard;

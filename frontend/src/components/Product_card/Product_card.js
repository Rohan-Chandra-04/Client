// ProductCard.js
import React from 'react';

const ProductCard = ({ product, onRemoveProduct }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Quantity: {product.quantity}</p>
      <button className="" onClick={() => onRemoveProduct(product.id)}>Remove Product</button>
    </div>
  );
};

export default ProductCard;

// ShopPage.js
import React, { useState } from 'react';
import ProductCard from '../../../../components/Product_card/Product_card';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './shoplanding.css';
import * as Yup from 'yup';

const productSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    quantity: Yup.number().required('Quantity is required').min(0, 'Quantity must be at least 0'),
  });

const ShopPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', category: 'Category 1', rating: 4, quantity: 10 },
    { id: 2, name: 'Product 2', description: 'Description 1', category: 'Category 1', rating: 4, quantity: 10 },
    { id: 3, name: 'Product 3', description: 'Description 1', category: 'Category 1', rating: 4, quantity: 10 },
    { id: 4, name: 'Product 4', description: 'Description 1', category: 'Category 1', rating: 4, quantity: 10 },
    { id: 5, name: 'Product 5', description: 'Description 1', category: 'Category 1', rating: 4, quantity: 10 },
    // Add more products as needed
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    category: '',
    rating: 0,
    quantity: 0,
  });

  const [latestProductId, setLatestProductId] = useState(products.length);

  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

 // ... (other code remains unchanged)

 const handleAddProduct = async () => {
    try {
      await productSchema.validate(newProduct, { abortEarly: false });
      setProducts([...products, { ...newProduct, id: latestProductId + 1 }]);
      setLatestProductId((prevId) => prevId + 1);
      setNewProduct({
        name: '',
        description: '',
        category: '',
        rating: 0,
        quantity: 0,
      });
    } catch (error) {
      // Yup validation error, handle it
      if (error.inner) {
        const errorMessages = error.inner.map((err) => err.message);
        alert(errorMessages.join('\n'));
      } else {
        alert(error.message);
      }
    }
  };
  

  const handleProductChange = (field, value) => {
    setNewProduct({ ...newProduct, [field]: value });
  };

  return (
    <div className="shop-page">
      <div className="shop-details">
        <h1>My Awesome Shop</h1>
        <p>Rating: 4.5</p>
        <p>Comments: Great service! Fast delivery!</p>
        <Link to="/chat" className="chat-button">
          Chat with Users
        </Link>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onRemoveProduct={handleRemoveProduct} />
        ))}
      </div>
      <div className="add-product-form">
        <h2>Add New Product</h2>
        <label>Name:</label>
        <input type="text" value={newProduct.name}  onChange={(e) => handleProductChange('name', e.target.value)}  />
        <label>Description:</label>
        <input
          type="text"
          value={newProduct.description}
          onChange={(e) => handleProductChange('description', e.target.value)} 
        />
        <label>Category:</label>
        <input
          type="text"
          value={newProduct.category}
          onChange={(e) => handleProductChange('category', e.target.value)} 
        />
        
        <label>Quantity:</label>
        <input
          type="number"
          value={newProduct.quantity}
          onChange={(e) => handleProductChange('quantity', parseInt(e.target.value, 10))} 
        />
        
        <button onClick={handleAddProduct}>Add Product</button>
        
      </div>


    </div>
  );
};

export default ShopPage;

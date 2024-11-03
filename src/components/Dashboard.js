// src/components/Dashboard.js
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

function Dashboard() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts(prev => [...prev, product]);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Admin Dashboard</h1>
            <ProductForm addProduct={addProduct} />
            <h2>Products</h2>
            <ProductList products={products} />
        </div>
    );
}

export default Dashboard;

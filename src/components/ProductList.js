// src/components/ProductList.js
import React from 'react';

function ProductList({ products }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {products.map((product, index) => (
                <div key={index} style={{ border: '1px solid #ddd', padding: '1rem' }}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>{product.description}</p>
                    {product.image && <img src={URL.createObjectURL(product.image)} alt={product.name} style={{ width: '100%', height: 'auto' }} />}
                </div>
            ))}
        </div>
    );
}

export default ProductList;

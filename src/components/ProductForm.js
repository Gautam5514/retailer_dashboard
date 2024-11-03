// src/components/ProductForm.js
import React, { useState } from 'react';
import '../App.css'; // Add this import to apply specific styles

function ProductForm({ addProduct }) {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setProduct(prev => ({
            ...prev,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({ name: '', price: '', description: '', image: null });
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
                <i className="fas fa-tag"></i>
            </div>
            <div className="form-group">
                <input
                    type="number"
                    name="price"
                    placeholder="Enter Product Price"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
                <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="form-group">
                <textarea
                    name="description"
                    placeholder="Enter Product Description"
                    value={product.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsSection = () => {
    const productId = useParams();
    console.log("productId :", productId);
    return (
        <div>
            <h2>This is Product Details Page</h2>
        </div>
    );
};

export default ProductDetailsSection;
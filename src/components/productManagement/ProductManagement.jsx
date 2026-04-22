import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProduct]=useState([])
    const addProduct= product=>{
        const newProducts = [...products, product]
        setProduct(newProducts)
        
    }
    console.log(products);
    return (
        <>
            <ProductForm addProduct={addProduct}/>
            <ProductTable products={products}/>
        </>
    );
};

export default ProductManagement;
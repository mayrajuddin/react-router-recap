import React, { useState } from 'react';

const ProductForm = ({addProduct}) => {  
    const [error, setError]=useState('')
    const handleForm = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value

        if(name.length === 0 ){
            setError('Give your name')
            return
        }else if(price <1 ){
            setError('Price cannot be nagetive')
            return
        }else if (quantity < 1){
            setError('Add Quantity')
            return
        }else{
            setError('')
        }
        const product = {
            name, price, quantity
        }
        
            addProduct(product);
            }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder='Product Name'  required/> <br />
                <input type="text" name="price" placeholder='Product Price' required/> <br />
                <input type="text" name="quantity" placeholder='Product Quantity' required/> <br />
                <input type="submit" value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default ProductForm;
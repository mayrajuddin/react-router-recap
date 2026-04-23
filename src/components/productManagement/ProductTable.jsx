import React from 'react';

const ProductTable = ({products}) => {
    
    return (
        <div>
            Total products: {products.length}
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p, i) => <tr key={i}>
                            <td>{i+1}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
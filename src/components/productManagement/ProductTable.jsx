import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            Total products: {products.length}
        </div>
    );
};

export default ProductTable;
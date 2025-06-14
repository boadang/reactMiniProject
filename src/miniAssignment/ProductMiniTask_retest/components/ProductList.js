import React from 'react';
import ProductItem from './ProductItem';

const ProductList = React.memo(({products, onDeleteProduct}) => {
    if(products.length === 0) {
        return <p>No product right here !</p>
    }

    console.log('ProductList rendered', products);

    return (
        <ul style={{listStyleType: 'none', padding: 0}}>
            {products.map((product) => (
                <ProductItem
                    product={product}
                    onDeleteProduct={onDeleteProduct}
                />
            ))}
        </ul>
    )

})

export default ProductList;
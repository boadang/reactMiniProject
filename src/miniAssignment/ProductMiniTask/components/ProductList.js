import React from 'react';
import ProductItem from './ProductItem';

// Sử dụng React.memo để tối ưu hiệu suất cho ProductList
// Nó sẽ chỉ re-render nếu props 'products' hoặc 'onDeleteProduct' thay đổi.
const ProductList = React.memo(({ products, onDeleteProduct }) => {
  console.log('ProductList re-rendered'); // Để theo dõi khi nào component này re-render

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Product List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <ProductItem
            key={product.id} // Rất quan trọng: sử dụng ID duy nhất làm key
            product={product}
            onDelete={onDeleteProduct}
          />
        ))}
      </ul>
    </div>
  );
});

export default ProductList;
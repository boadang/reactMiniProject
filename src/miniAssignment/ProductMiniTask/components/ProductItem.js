import React from 'react';

// Sử dụng React.memo để tối ưu hiệu suất cho ProductItem
// Nó sẽ chỉ re-render nếu props 'product' hoặc 'onDelete' thay đổi.
const ProductItem = React.memo(({ product, onDelete }) => {
  console.log(`ProductItem "${product.name}" re-rendered`); // Để theo dõi khi nào component này re-render

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #eee'
    }}>
      <span>
        **{product.name}** - ${product.price.toFixed(2)}
      </span>
      <button
        onClick={() => onDelete(product.id)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  );
});

export default ProductItem;
import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
    if (!name || !price) {
      alert('Vui lòng nhập đầy đủ tên và giá sản phẩm.');
      return;
    }
    // Gọi hàm từ ProductCatalog để thêm sản phẩm
    onAddProduct({ name, price: +price }); // Đảm bảo price là số
    setName(''); // Reset input tên
    setPrice(''); // Reset input giá
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px dashed #ddd', borderRadius: '5px' }}>
      <h3>Add New Product</h3>
      <div>
        <label htmlFor="productName" style={{ display: 'block', marginBottom: '5px' }}>Product Name:</label>
        <input
          id="productName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Smartphone"
          style={{ width: 'calc(100% - 10px)', padding: '8px', marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="productPrice" style={{ display: 'block', marginBottom: '5px' }}>Price:</label>
        <input
          id="productPrice"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="e.g., 699.99"
          style={{ width: 'calc(100% - 10px)', padding: '8px', marginBottom: '15px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
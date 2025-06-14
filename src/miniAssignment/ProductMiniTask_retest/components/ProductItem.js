
function ProductItem({product, onDeleteProduct }) {
    const handleDeleteProduct = () => {
        onDeleteProduct(product.id);
    }

    return (
        <li style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h4>{product.name}</h4>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button
                onClick={() => {
                    handleDeleteProduct(); // <-- Gọi hàm handleDeleteProduct()
                    console.log(`Deleting product with ID: ${product.id}`); // <-- Gọi console.log()
                }}                
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

}
export default ProductItem;
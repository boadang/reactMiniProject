import {useState} from 'react';

function ProductForm({onAddHandle}) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !price) {
            alert('Please enter both name and price of the product.');
            return;
        }

        const newProduct = {
            id : Date.now(),
            name: name.trim(),
            price: +price
        }

        console.log(`New Product: ${newProduct} and type: ${typeof newProduct.price}`);
        onAddHandle(newProduct);
        setName('');
        setPrice('');
    }

    return (
        <form
            onSubmit = {handleSubmit}
            style = {{
                marginBottom: '20px',
                padding: '15px',
                border: '1px dashed #ddd',
                borderRadious: '5px',
                backgroundColor: '#f9f9f9'
            }}
        >
            <h3>Add New Product</h3>
            <div>
                <label htmlFor="productName" style={{ display: 'block', marginBottom: '5px' }}>
                    Product Name:
                </label>
                <input
                    type = "text"
                    id = "productName"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    placeholder = "e.g., Smartphone"
                />
                <label htmlFor="productName" style={{ display: 'block', marginBottom: '5px' }}>
                    Product Name:
                </label>

                <input 
                    type = "number"
                    id = "productPrice"
                    value = {price}
                    onChange = {(e) => setPrice(e.target.value)}
                    placeholder = "e.g., 699.99"
                />

                <button
                    type = "submit"
                    onClick = {handleSubmit}
                    style = {{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >Add</button>

            </div>
        </form>
    )
}

export default ProductForm;
import {useReducer, useState, useCallback, useMemo} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

//Initial State
const initialProducts = [];

//Actions
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//Reducer
function productReducer(state, action) {
    switch(action.type) {
        case ADD_PRODUCT:
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price
            }]
        case DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.payload)
        default:
            throw new Error('Invalid action type');
    }
}

function ProductCatalog() {
    //useReducer để quản lý 
    const [products, dispatch] = useReducer(productReducer, initialProducts);
    const [filterText, setFilterText] = useState('');

    const handleAddProduct = useCallback((newProduct) => {
        dispatch({type: ADD_PRODUCT, payload: newProduct});
    }, [dispatch]);

    const handleDeleteProduct = useCallback((productId) => {
        dispatch({type: DELETE_PRODUCT, payload: productId});
    }, [dispatch]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => 
            product.name.toLowerCase().includes(filterText.toLowerCase())
        );
    }, [products, filterText]);

    const totalFilteredPrice = useMemo(() => {
        return filteredProducts.reduce((total, product) => total + product.price, 0);
    })

    return (
        <div className = "ProductCatalog">
            <h2>Producer Catalog</h2>
            <ProductForm onAddHandle = {handleAddProduct}/>
            <input 
                type = "text"
                placeholder = 'Search products...'
                onChange = {(e) => setFilterText(e.target.value)}
                style = {{marginBottom: '20px', padding: '10px', width: '100%', boxSizing: 'border-box'}}
            />

            <p>Total: {totalFilteredPrice}</p>
            <ProductList 
                products = {filteredProducts}
                onDeleteProduct = {handleDeleteProduct}
            />
        </div>
    )
}

export default ProductCatalog;


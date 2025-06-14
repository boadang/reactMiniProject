import {useCallback, useReducer, useState, useMemo} from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

//Initial State
const initialProducts = [
    { id: 1, name: 'Laptop Asus', price: 1200 },
    { id: 2, name: 'Mouse Logitech', price: 50 },
    { id: 3, name: 'Keyboard Razer', price: 150 },
    { id: 4, name: 'Monitor Dell', price: 300 },
];

//Actions
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//Reducer
function productReducer(state, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, {
                id: Date.now(),
                name: action.payload.name,
                price: action.payload.price
            }];
        case DELETE_PRODUCT:
            const newState = state.filter(product => product.id !== action.payload.id);
            return newState;
        default:
            throw new Error('Invalid action type')
    }
}

//Dispatch
function ProductCatalog() {
    // useReducer để quản lý mảng sản phẩm
    const [products, dispatch] = useReducer(productReducer, initialProducts);
    // useState để quản lý text tìm kiếm/lọc
    const [filterText, setFilterText] = useState('');

    // --- useCallback cho các hàm xử lý sự kiện ---
    // Hàm thêm sản phẩm, được truyền xuống ProductForm
    // Sử dụng useCallback vì dispatch là một hàm ổn định, nên hàm này cũng ổn định
    const handleAddProduct = useCallback((newProduct) => {
        dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    }, [dispatch]); // dispatch không thay đổi giữa các renders, nên dependencies có thể là [dispatch] hoặc []

    // Hàm xóa sản phẩm, được truyền xuống ProductList và ProductItem
    // Sử dụng useCallback để hàm này không bị tạo lại mỗi khi component re-render
    const handleDeleteProduct = useCallback((productId) => {
        dispatch({ type: 'DELETE_PRODUCT', payload: productId });
    }, [dispatch]);

    // --- useMemo cho các giá trị được tính toán phức tạp/tốn kém ---
    // Lọc sản phẩm dựa trên filterText
    // Hàm này chỉ chạy lại khi 'products' hoặc 'filterText' thay đổi
    const filteredProducts = useMemo(() => {
        console.log('Calculating filtered products...'); // Để xem khi nào hàm này chạy
        if (!filterText) {
            return products;
        }
        const lowercasedFilterText = filterText.toLowerCase();
        return products.filter(product =>
            product.name.toLowerCase().includes(lowercasedFilterText)
        );
    }, [products, filterText]);

    // Tính tổng giá trị của các sản phẩm đã lọc
    // Hàm này chỉ chạy lại khi 'filteredProducts' thay đổi
    const totalFilteredPrice = useMemo(() => {
        console.log('Calculating total filtered price...'); // Để xem khi nào hàm này chạy
        return filteredProducts.reduce((total, product) => total + product.price, 0);
    }, [filteredProducts]);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Product Catalog</h2>

            {/* Form thêm sản phẩm */}
            <ProductForm onAddProduct={handleAddProduct} />

            <hr style={{ margin: '20px 0' }} />

            {/* Input lọc sản phẩm */}
            <div>
                <label htmlFor="filter">Filter by name: </label>
                <input
                    id="filter"
                    type="text"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    placeholder="Enter product name to filter"
                    style={{ marginBottom: '15px', padding: '8px' }}
                />
            </div>

            {/* Hiển thị tổng giá trị */}
            <h3>Total Value of Filtered Products: ${totalFilteredPrice.toFixed(2)}</h3>

            {/* Danh sách sản phẩm đã lọc */}
            <ProductList
                products={filteredProducts}
                onDeleteProduct={handleDeleteProduct}
            />
        </div>
    );
}

export default ProductCatalog;
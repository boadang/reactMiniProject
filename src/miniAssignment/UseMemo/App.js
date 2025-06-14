import { useMemo, useState, useEffect } from "react";

function UseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
    }

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price;
        },0);

        return result;
    }, [products])

    return (
        <div className = "UseMemo">
            <input 
                value = {name}
                onChange = { e => setName(e.target.value)}
            />
            <br />
            <input 
                value = {price}
                onChange = { e => setPrice(e.target.value)}
            />

            <br />
            <button onClick = {handleSubmit}>Add</button>

            <br />
            Total: {total}
            <li>
                {products.map((prod, index) => {
                    return (
                        <div key = {index}>
                            <p>{prod.name}-{prod.price}</p>
                        </div>
                    )
                })}
            </li>
        </div>
    )
}

export default UseMemo;
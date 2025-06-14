import {useState} from 'react';
import './App.css';

function CountApp(){
    const beginNumber = 0;
    const [count, setCount] = useState(beginNumber);

    const handleIncrease = () =>{
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () =>{
        setCount(prevCount => prevCount - 1);
    };

    const handleReset = () =>{
        setCount(beginNumber);
    };

    return (
        <div className="countApp">
            <h1>Counter App</h1>
            <div className = "container">
                <h3
                    value = {count}
                    onChange = {(e) => setCount(e.target.value)}
                >{count}</h3>
                <div className = "buttonGroup">
                    <button onClick = {handleIncrease}>Increase</button>
                    <button onClick = {handleReset}>Reset</button>
                    <button onClick = {handleDecrease}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export default CountApp;
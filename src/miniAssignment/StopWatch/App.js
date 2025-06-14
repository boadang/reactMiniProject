import {useState, useEffect, useRef} from 'react';

function StopWatch() {

    const [count, setCount] = useState(0)
    const refTime = useRef(count);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(isRunning) {
            refTime.current = setInterval(()=>{
                setCount(count => count + 1);
                console.log(refTime.current);
            }, 1000)
        }

        return () => {
            if(refTime.current) {
                clearInterval(refTime.current);
                refTime.current = null;
                console.log("cleanup :",refTime.current);
            }
        }
    },[isRunning]);

    const handleStart = () => {
        if(!isRunning) {
            setIsRunning(true)
        }
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    const handleReset = () => {
        setIsRunning(false);
        setCount(0);

        if(refTime.current) {
            clearInterval(refTime.current);
            refTime.current = null;
        }
    }

    return (
        <div className = "StopWatch">
            <p>{count}</p>
            <div className = "buttonGroup">
                <button onClick = {handleStart}>Start</button>
                <button onClick = {handleStop}>Stop</button>
                <button onClick = {handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;
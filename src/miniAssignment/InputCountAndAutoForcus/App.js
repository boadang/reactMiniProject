import {useState, useEffect, useRef} from 'react';

function InputCountAndAutoForcus() {

    const [countText, setCountText] = useState(0);
    const refTextArea = useRef(null);

    const handleChange = (e) => {
        setCountText(e.target.value)
    }

    const count = countText.length;

    useEffect(() => {
        if(refTextArea.current){
            refTextArea.current.focus();
        }
    },[countText]);

    return (
        <div className = "InputCountAndAutoForcus">
            <textarea 
                ref = {refTextArea}
                onChange = {handleChange}
                rows = {5}
                cols = {5}
            />
            <p>{count}</p>
        </div>
    )
}

export default InputCountAndAutoForcus;
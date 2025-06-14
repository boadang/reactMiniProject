import {useState, useEffect} from 'react';

function UpdatingDocumentTitle() {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        document.title = inputValue ? inputValue : "nothing";

        return () => {
            document.title = "default webpage"
        }
    },[inputValue])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className = "updatingDocumentTitle">
            <input 
                value = {inputValue}
                type="text"
                onChange = {handleChange}
                placeholder="Enter the new title ..."
            />
        </div>
    )
}

export default UpdatingDocumentTitle; 
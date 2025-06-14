import {useState, useRef, useEffect} from 'react';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const refBtn = useRef(null);

    const onClose = () => {
        if(isOpen) {
            setIsOpen(!isOpen);
            console.log(isOpen);
        }
    }

    const openModal = () => {
        if(!isOpen) {
            setIsOpen(!isOpen);
            console.log(isOpen);
        }
    }

    useEffect(() => {
        if(isOpen) {
            refBtn.current.focus();
            console.log(refBtn.current);
        }

        return () => {
            console.log("clean up !")
        }
    }, [isOpen])

    return (
        <div className = "Modal">
            <button onClick = {openModal}>Click</button>
            {isOpen && (
                <>
                    <p>Damm ! Bro</p>
                    <button
                        ref = {refBtn}
                        onClick = {onClose}
                    >x</button>
                </>
            )}
        </div>
    )
}

export default Modal;
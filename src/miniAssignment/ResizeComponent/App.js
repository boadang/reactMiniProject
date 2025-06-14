import {useState, useEffect} from 'react';

function ResizeComponent() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])
    // don't need to add width into dependency, cuz when width changes, it will re-reder all code
    // Beside, event resize of window always recall this callback ('handleResize') when it's size has changed

    return (
        <div className = "resizeComponent">
            <p>{width}</p>
        </div>
    )
}

export default ResizeComponent;
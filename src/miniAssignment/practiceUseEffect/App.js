import {useState, useEffect} from 'react';
import "./App.css";

const types = ['albums', 'posts', 'comments'];

function PracticeUseEffect() {

    const [type, setType] = useState('posts');
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(data => {
                setContent(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
         // Cleanup function
         return () => {
            setContent([])
        }
    }, [type])

    return (
        <div className="practiceUseEffect">
            <div className = "btnGroup">
                {
                    types.map((item) => {
                        return (
                            <button
                                key = {item}
                                onClick = {() => {
                                    setType(item);
                                }}
                            >
                                {item}
                            </button>
                        )
                    })
                }
            </div>

            <div className = "contentGroup">
                {
                    content.map((item) => {
                        return (
                            <h3 key = {item.id}>{item.title || item.name}</h3>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PracticeUseEffect;
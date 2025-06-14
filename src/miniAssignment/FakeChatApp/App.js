import {useState, useEffect} from 'react';
import './App.css';

const lessons = [
    {id: 1, title: "Content 1"},
    {id: 2, title: "Content 2"},
    {id: 3, title: "Content 3"},
];
 
function FakeChatApp() {

    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        //Cleanup function
        return (
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        )
    }, [lessonId])

    return (
        <div className='FakeChatApp'>
            {lessons.map((lesson) => (
                    <li
                        key = {lesson.id}
                        onClick = {() => setLessonId(lesson.id)}
                        style = {{
                            color: lessonId === lesson.id ?
                            'red' : '#333'
                        }}
                    >
                        {lesson.title}
                    </li>
            ))}
        </div>
    )
}

export default FakeChatApp;
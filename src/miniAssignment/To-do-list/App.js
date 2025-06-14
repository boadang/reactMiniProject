import {useState} from 'react';
import './App.css';

function ToDoListApp(){
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (inputValue.trim()) {
            setTasks(prevTasks => [...prevTasks, inputValue]);
            setInputValue('');
        }
    };

    const deleteTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <div className="ToDoListApp">
            <h1>To-do List</h1>
            <div className="container">
                <div className="input-container">
                    <input
                        type = "text"
                        value = {inputValue}
                        onChange = {(e) => setInputValue(e.target.value)}
                        placeholder = "Add a new task"
                        // Sửa lỗi onKeyDown: chỉ gọi addTask nếu inputValue có nội dung
                        onKeyDown = {
                            (e) => {
                                if(e.key === 'Enter') {
                                    addTask(); // Hàm addTask đã có logic kiểm tra inputValue.trim()
                                }
                            }
                        }
                    /> {/* Sử dụng thẻ tự đóng */}
                    <button onClick={() => {addTask(); console.log("Click button !")}}>Add task</button>
                </div>
            </div>
            <div className = "listTask">
                {console.log(tasks)} {/* Chỉ để debug, nên bỏ khi production */}
                {tasks.length === 0 ? (
                    <p>No tasks yet! Add some above.</p>
                ) : (
                    tasks.map((task,index) => {
                        return (
                            <div className="task" key={index}>
                                <p>{task}</p>
                                {/* Sửa lỗi onClick cho nút Delete */}
                                <button onClick={() => deleteTask(index)} id="deleteBtn">Delete</button>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default ToDoListApp;
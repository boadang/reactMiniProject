import {useState, useRef, useEffect} from 'react';
import ToDoListApp from './miniAssignment/To-do-list/App';
import CountApp from './miniAssignment/Counter/App';
import CalculatorApp from './miniAssignment/Calculator/App';
import PracticeUseEffect from './miniAssignment/practiceUseEffect/App';
import FakeChatApp from './miniAssignment/FakeChatApp/App';
import UpdatingDocumentTitle from './miniAssignment/UpdatingDocumentTitle/App';
import ResizeComponent from './miniAssignment/ResizeComponent/App'
import ScrollPosition from './miniAssignment/ScrollPosition/App'
import InputCountAndAutoForcus from './miniAssignment/InputCountAndAutoForcus/App'
import StopWatch from './miniAssignment/StopWatch/App'
import Modal from './miniAssignment/Modal/App'
import UseMemo from './miniAssignment/UseMemo/App'
import ProductMiniTask from './miniAssignment/ProductMiniTask/App'
import ProductMiniTask_retest from './miniAssignment/ProductMiniTask_retest/App'

import {useStore, actions} from './miniAssignment/Todo-context';

import Video from './video';
function App() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  }

  const handlePause = () => {
    videoRef.current.pause();
  }

  return (
    <div className="App">
      <Video ref = {videoRef}/>
      <button onClick = {handlePlay}>Play</button>
      <button onClick = {handlePause}>Pause</button>
    </div>
  )
}

// ------------------ Todo-context App -------------------

// function App() {
//   const [state, dispatch] = useStore();
//   const {todos, todoInput} = state
//   console.log('todoInput', todoInput);
//   const todoRef = useRef();

//   useEffect(() => {
//     todoRef.current.focus();
//   }, []);

//   return (
//     <div 
//       className="App"
//       style = {{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         width: '100vw',
//         backgroundColor: '#f0f0f0',
//         padding: '20px'
//       }}
//     >
//       <h1
//         style={{
//           fontSize: '2rem',
//           color: '#333',
//           margin: '20px',
//           textAlign: 'center'
//         }}
//       >Todo app</h1>

//       <input 
//         type = "text"
//         placeholder = "Search for a task..."
//         value = {todoInput}
//         ref = {todoRef}
//         onChange = {(e) =>
//           dispatch(actions.setTodoInput(e.target.value))
//         }
//         style = {{margin: '20px', padding: '10px', width: '300px'}}
//       />

//       <button
//         onClick = {() => {
//           if(todoInput.trim() === '') {
//             alert('Please enter a task');
//           }

//           dispatch(actions.addTodoInput(todoInput));
//           console.log('todos', todos);
//           dispatch(actions.setTodoInput(''));
//         }}
//         style = {{
//           padding: '10px 20px',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           marginBottom: '10px'
//         }}
//       >Add</button>

//       <p>List Todo</p>

//       {todos.map((todo, index) => {
//         return (
//           <div 
//           className = "TodoItems" 
//           key = {index}
//           style = {{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             padding: '10px',
//             margin: '5px 0',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             backgroundColor: '#f9f9f9',
//             minWidth: '300px',
//           }}
//           >
//             <p>{todo}</p>
//             <button
//               onClick = {(e) => {
//                 e.stopPropagation();
//                 dispatch(actions.deleteTodoInput(index));
//               }}
//               style = {{
//                 padding: '5px 10px',
//                 backgroundColor: '#f44336',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer'
//               }}
//             >x</button>
//           </div> 
//         )
//       })}
//     </div>
//   );
// }

export default App;

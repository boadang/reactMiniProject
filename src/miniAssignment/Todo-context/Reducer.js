import {ADD_TODO, SET_TODO_INPUT, DELETE_TODO} from './constant';

const initState = {
    id: Date.now(),
    todos: [],
    todoInput: ''
}

function Reducer(state, action) {
    switch(action.type){
        //actions
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_,index) => index !== action.payload)
            }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export {initState};
export default Reducer;
import {SET_TODO_INPUT, ADD_TODO, DELETE_TODO} from './constant';

export const setTodoInput = payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export const addTodoInput = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodoInput = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    }
}
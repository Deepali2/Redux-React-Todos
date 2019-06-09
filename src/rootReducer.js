import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "./constants";

const initialState = {
  todos: [],
  id: 0
}

export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      var newState = {...state};
      newState.id++;
      let todos = [...newState.todos, {todo:action.todo, id: newState.id}];
      return {...newState, todos};
    case REMOVE_TODO:
       let newTodos = state.todos.filter(todo => todo.id !== action.id);
       return {...state, todos: newTodos};
    default:
      return state;
  }
}
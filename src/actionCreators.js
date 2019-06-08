import {ADD_TODO, REMOVE_TODO} from "./constants";

//action creators are functions that return objects. They are used to connect React with Redux
export function addTodo(todo) { //actiion creator for addTodo
  return {
    type: ADD_TODO,
    todo
  };
}

export function removeTodo(id) { //action creator for remove Todo
  return {
    type: REMOVE_TODO,
    id
  };
}
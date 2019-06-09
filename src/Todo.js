import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => (
  <li>
    {props.todo}
    <button onClick={props.removeTodo}>X</button>
  </li>
)

Todo.propTypes = {
  todo: PropTypes.string,
  removeTodo: PropTypes.func  
}

export default Todo;


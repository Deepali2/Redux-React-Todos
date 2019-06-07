import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => (
  <li>{props.todo}</li>
)

Todo.propTypes = {
  todo: PropTypes.string,
  key: PropTypes.number
}

export default Todo;


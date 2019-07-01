import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo, getTodos } from "./actionCreators";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  handleAdd(todo) {
    this.props.addTodo(todo);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  //  handleClick(e) {
  //   e.preventDefault();
  //   this.props.dispatch({
  //     type: "UPDATE_TODO",
  //     todo: this.state.todo
  //   });
  //   e.target.reset()
  //  }

  render() {
    let todos = this.props.todos.map(todo => (
      <Todo
        removeTodo={this.removeTodo.bind(this, todo._id)}
        todo={todo.todo}
        key={todo._id}
      />
    ));
    //Since for is a reserved word in JavaScript, React elements use htmlFor instead. If you use htmlFor on your React element, for will end up in the DOM.
    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route
          exact
          path="/todos"
          component={() => (
            <div>
              <ul>{todos}</ul>
            </div>
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // we are turning our redux state into props on the react component
  //all the keys of the object that is returned will be placed on this.props for the component

  return {
    todos: reduxState.todos //reduxState.todos will go the reducer and grab the state
  };
}

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, getTodos }
)(TodoList);

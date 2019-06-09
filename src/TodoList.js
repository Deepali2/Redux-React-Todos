import React, {Component} from "react";
import Todo from "./Todo";
import {connect} from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      todo: this.state.todo
    });
    e.target.reset() //reset the form
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  removeTodo(id) {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    })
  }

  render () {
    let todos = this.props.todos.map((todo, index) => (
      <Todo removeTodo={this.removeTodo.bind(this, todo.id)} todo={todo.todo} key={index} />
    ));
    //Since for is a reserved word in JavaScript, React elements use htmlFor instead. If you use htmlFor on your React element, for will end up in the DOM.
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">Task</label>
          <input 
            type="text" 
            name="todo" 
            id="todo"
            onChange={this.handleChange}
            placeholder='todo'
            />
          <button>Add a Todo!</button>
        </form>      
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(reduxState) { // we are turning our redux state into props on the react component
  //all the keys of the object that is returned will be placed on this.props for the component
  return {
    todos: reduxState.todos //reduxState.todos will go the reducer and grab the state
  }
}

export default connect(mapStateToProps)(TodoList);
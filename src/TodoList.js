import React, {Component} from "react";
import Todo from "./Todo";
import {connect} from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let todos = this.props.todos.map((todo, index) => (
      <Todo todo={todo} key={index} />
    ));
    return (
      <div>
        <ul>
        {[].map((todo, index) => <Todo todo={todo} key={index}/>)}
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
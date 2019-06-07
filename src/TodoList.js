import React, {Component} from "react";
import Todo from "./Todo";


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['eat', 'sleep', 'dance']
    }
  }
  render () {
    return(
      <div>
        <ul>
        {this.state.todos.map((todo, index) => <Todo todo={todo} key={index}/>)}
        </ul>
      </div>
    )
  }
}
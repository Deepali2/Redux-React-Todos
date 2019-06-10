import React, {Component} from "react";

export default class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.todo);
    e.target.reset() //reset the form
    this.props.history.push("/todos"); //this comes from {...props} We could have used another component called 'WithRouter' to do that but this is nicer
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Task</label>
        <input 
          type="text" 
          name="todo" 
          id="todo"
          onChange={this.handleChange}
          // onClick={this.handleClick}
          placeholder='todo'
        />
      {/* <button>Add a Todo!</button> */}
    </form>  
    )
  }
}
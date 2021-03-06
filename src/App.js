import React, {Component} from 'react';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from "./lib/todoHelpers";

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an app', isComplete: false},
      {id: 3, name: 'Ship it', isComplete: false}
    ],
    currentTodo: '',
    errorMessage: ''
  }

handleSubmit = (e) => {
e.preventDefault()
  const newID = generateId()
  const newTodo = {id: newID, name: this.state.currentTodo, isComplete: false}
  const updatedTodos = addTodo(this.state.todos, newTodo)
  this.setState({
    todos: updatedTodos,
    currentTodo: ''
  })
  }

  handleEmptySubmit = (e) =>  {
    e.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleInputChange = (e) =>  {
    this.setState({
      currentTodo: e.target.value
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
        <div>
          <div className="Todo-App">
            {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
            <TodoForm handleInputChange={this.handleInputChange}
                      currentTodo={this.state.currentTodo}
                      handleSubmit={submitHandler}
            />
                      <TodoList todos={this.state.todos}/>
          </div>
        </div>
    );
  }
}

export default App;


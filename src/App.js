import React, {Component} from 'react';
import './App.css';
import {TodoForm, TodoList} from './components/todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an app', isComplete: false},
        {id: 3, name: 'Ship it', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    this.setState({
      currentTodo: e.target.value
    })
  }

  render() {
    return (
        <div>
          <div className="Todo-App">
            <TodoForm handleInputChange={this.handleInputChange}
                      currentTodo={52}/>
                      <TodoList todos={this.state.todos}/>
          </div>
        </div>
    );
  }
}

export default App;


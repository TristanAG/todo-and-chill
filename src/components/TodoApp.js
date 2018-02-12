import React from 'react'
import Header from './Header'
import Prompt from './Prompt'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import ClearTodos from './ClearTodos'

class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.handleClearAll = this.handleClearAll.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
    this.state = {
      todos: [
        'buy crystals 💎',
        'meditate + yoga 🌴',
        'go to 6th dimension 🔮'
      ],
      numberOfTodos: 3
    }
  }

  handleClearAll() {
    this.setState(() => ({
      todos: [],
      numberOfTodos: 0
    }))
  }

  handleAddTodo(todo) {
    if (!todo) {
      return 'You need to actually write something first'
    } else if (this.state.todos.indexOf(todo) > -1) {
      return 'You already entered this... ambitions much?'
    }

    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo),
      numberOfTodos: prevState.todos.length + 1
    }))
  }

  handleDeleteTodo(todoToDelete) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => {
        return todoToDelete !== todo
      }),
      numberOfTodos: prevState.numberOfTodos - 1
    }))
  }

  render() {
    const title = 'react todo app'
    return (
      <div>
        <div className="container" style={{

        }}>
          <a href="http://tristangruener.com">tristangruener.com</a>
        </div>
        <hr />
        <div className="container" style={{marginTop: '15px'}}>
          <Header title={title}/>
          <Prompt numberOfTodos={this.state.numberOfTodos}/>
          <TodoList todos={this.state.todos} handleDeleteTodo={this.handleDeleteTodo}/>
          <AddTodo handleAddTodo={this.handleAddTodo}/>
          <ClearTodos
            hasTodos={this.state.numberOfTodos > 0}
            handleClearAll={this.handleClearAll}
          />
        </div>
      </div>
    )
  }
}

export default TodoApp

import React from 'react'
import ReactDOM from 'react-dom'
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
// import App from './App';
// import registerServiceWorker from './registerServiceWorker'

const app = {
  title: 'todo and chill',
  todos: []
}


class TodoApp extends React.Component {
  render() {
    const title = 'react todo app'
    const todos = ['eat', 'sleep', 'be merry']
    const numberOfTodos = todos.length

    return (
      <div className="container" style={{marginTop: '15px'}}>
        <Header title={title}/>
        <Prompt numberOfTodos={numberOfTodos}/>
        <TodoList todos={todos}/>
        <AddTodo />
        <ClearTodos todos={todos}/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h5>{this.props.title}</h5>
      </header>
    )
  }
}

class Prompt extends React.Component {
  render() {
    return (
      <p>
        {
          this.props.numberOfTodos > 0 ?
            `you have ${this.props.numberOfTodos} todos` :
            'add some todos, won\'t you?'
        }
      </p>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => <Todo key={todo} todoText={todo}/>)
        }
      </ul>
    )
  }
}

class Todo extends React.Component {
  render(){
    return (
      <li>
        {this.props.todoText}
      </li>
    )
  }
}

class AddTodo extends React.Component {
  addTodo(e) {
    e.preventDefault()
    const todo = e.target.elements.todo.value.trim()

    if(todo){
      app.todos.push(todo)
      e.target.elements.todo.value = ''
      render()
    }
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input type="text" name="todo" />
        <button>+</button>
      </form>
    )
  }
}

class ClearTodos extends React.Component {
  constructor(props){
    super(props)
    this.clearTodos = this.clearTodos.bind(this)
  }

  clearTodos() {
    console.log(this.props.todos)
    // this.app.todos = []
    render()
  }

  render() {
    return(
      <div>
        {
          app.todos.length > 0 && <span className="clear-all" onClick={this.clearTodos}>clear all</span>
        }
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<TodoApp />, document.getElementById('root'));
}

render()
// registerServiceWorker();

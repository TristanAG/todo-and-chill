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
    return (
      <div className="container" style={{marginTop: '15px'}}>
        <Header />
        <Prompt />
        <TodoList />
        <AddTodo />


        {
          app.todos.length > 0 && <span className="clear-all" onClick={clearTodos}>clear all</span>
        }
      </div>
    )
  }
}

const addTodo = (e) => {
  e.preventDefault()
  const todo = e.target.elements.todo.value
  app.todos.push(todo)
  e.target.elements.todo.value = ''
  render()
}

const clearTodos = () => {
  console.log('hello')
  app.todos = []
  render()
}

const Header = () => (
  <header>
    <h5>{app.title}</h5>
  </header>
)

const Prompt = () => (
  <p>
    {
      app.todos.length > 0 ?
        `you have ${app.todos.length} todos` :
        'add some todos, won\'t you?'
    }
  </p>
)

const TodoList = () => (
  <ul>
    {
      app.todos.map((todo) => {
        return <li key={todo}>{todo}</li>
      })
    }
  </ul>
)

class AddTodo extends React.Component {
  render() {
    return (
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button>+</button>
      </form>
    )
  }
}

const render = () => {
  ReactDOM.render(<TodoApp />, document.getElementById('root'));
}

render()
// registerServiceWorker();

import React from 'react'
import ReactDOM from 'react-dom'
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
// import App from './App';
// import registerServiceWorker from './registerServiceWorker'

class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.handleClearAll = this.handleClearAll.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
    this.state = {
      todos: ['buy crystals 💎', 'meditate + yoga 🌴', 'go to 6th dimension 🔮'],
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
    )
  }
}

const Header = ({ title }) => (
  <header>
    <h5>{title}</h5>
  </header>
)

const Prompt = ({ numberOfTodos }) => {
  // let prompt = ''

  if(numberOfTodos === 0){
    return <p><i>add some todos, won't you?</i></p>
  } else if (numberOfTodos === 1){
    return <p><i>you have <b>1</b> todo</i></p>
  } else {
    return <p><i>you have <b>{numberOfTodos}</b> todos</i></p>
  }

  return (
    <p>{prompt}</p>
  )
}


// const Prompt = ({ numberOfTodos }) => {
//   let prompt = ''
//
//   if(numberOfTodos === 0){
//     prompt = 'add some todos, won\'t you?'
//   } else if (numberOfTodos === 1){
//     prompt = `you have ${numberOfTodos} todo`
//   } else {
//     prompt = `you have ${numberOfTodos} todos`
//   }
//
//   return (
//     <p>{prompt}</p>
//   )
// }

const TodoList = (props) => (
  <div>
    {props.todos.map((todo, index) => (
      <Todo
        key={todo}
        todoText={todo}
        id={index}
        handleDeleteTodo={props.handleDeleteTodo}
      />
    ))}
  </div>
)

const Todo = ({ todoText, handleDeleteTodo }) => (
  <div className="todo">
    {todoText}
       <span
        className="delete-todo"
        onClick={() => {
          handleDeleteTodo(todoText)
        }}
      >
        [<b>x</b>]
      </span>
    </div>
)

//
// class Todo extends React.Component {
//   constructor(props) {
//     super(props)
//
//   }
//   render(){
//     return (
//       <div className="todo">
//         {this.props.todoText}
//         <span
//           className="delete-todo"
//           onClick={() => {
//             this.props.handleDeleteTodo(this.props.todoText)
//           }}
//         >
//           [<b>x</b>]
//         </span>
//       </div>
//     )
//   }
// }

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.state = {
      error: undefined
    }
  }
  addTodo(e) {
    e.preventDefault()
    const todo = e.target.elements.todo.value.trim()
    const error = this.props.handleAddTodo(todo)

    this.setState(() => ( {error} ))
    e.target.elements.todo.value = ''
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addTodo}>
          <input type="text" name="todo" />
          <button>add todo</button>
        </form>
      </div>
    )
  }
}

const ClearTodos = ({ hasTodos, handleClearAll }) => {
  if(hasTodos) {
    return <span className="clear-all" onClick={handleClearAll}>clear all</span>
  }
  return null
}

ReactDOM.render(
  <TodoApp />,
document.getElementById('root'));

// registerServiceWorker();

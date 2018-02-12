import React from 'react'

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

export default AddTodo

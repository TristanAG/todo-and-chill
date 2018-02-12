import React from 'react'
import Todo from './Todo'

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

export default TodoList

import React from 'react'

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

export default Todo

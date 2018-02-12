import React from 'react'

const Prompt = ({ numberOfTodos }) => {
  if(numberOfTodos === 0){
    return <p><i>add some todos, won't you?</i></p>
  } else if (numberOfTodos === 1){
    return <p><i>you have <b>1</b> todo</i></p>
  } else {
    return <p><i>you have <b>{numberOfTodos}</b> todos</i></p>
  }
}

export default Prompt

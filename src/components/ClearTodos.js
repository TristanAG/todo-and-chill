import React from 'react'

const ClearTodos = ({ hasTodos, handleClearAll }) => {
  if(hasTodos) {
    return <span className="clear-all" onClick={handleClearAll}>clear all</span>
  }
  return null
}

export default ClearTodos

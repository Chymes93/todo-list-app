import React from 'react'
import ToDoApp from './ToDoApp.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

const App = () => {
  return (
    <div>
      <ToDoApp />
      <AddTodo />
      <TodoItem />
      <TodoList />
    </div>
  )
}

export default App




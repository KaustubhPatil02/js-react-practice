import React from 'react'
import './App.css'
const App = () => {

  const [todos, setTodos] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')
  const [isChecked, setIsChecked] = React.useState(false)


  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }
    setTodos([...todos, newTodo])
    setInputValue('')
    console.log(newTodo)
  }

  return (
    <div>
      <h1>Todo</h1>
      <div className="todo-container">
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text" 
          placeholder="Add a new todo" 
        />
        <button onClick={addTodo}>Add</button>
       {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => {
    setTodos(todos.map(t =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    ));
  }} 
            />
            <span>{todo.text}</span>
            <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>Delete</button>
          </div>
        ))}
        {todos.length === 0 && <p>No todos yet!</p>}    
       
    </div>
    </div>
  )
}

export default App
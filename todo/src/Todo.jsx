import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const AddTodo = () => {
        if (!inputValue.trim()) return;
        const newTodo = { text: inputValue }
        setTodos([...todos, newTodo]);
        setInputValue('');
    }

    const deleteTodo= (index) => {
          setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h1>Todo</h1>
            <div className="todo-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={AddTodo}>Add</button>
                {todos.length > 0 ? (
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index} className="todo-item">
                                <span>{todo.text}</span>
                                <button
                                    onClick={()=>deleteTodo(index)}
                                >Delete</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No todos yet!</p>
                )}
            </div>
        </div>
    )
}

export default Todo
import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAdd() {
    setTodos([...todos, inputText]);
    setInputText("");
  }

  function handleResetTodos() {
    setTodos([]);
    setInputText("");
  }

  function handleRemoveTodo(index) {
    setTodos(todos.filter((_, todo) => todo !== index));
  }

  return (
    <>
      <h2>My list:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputText}
        onChange={(type) => setInputText(type.target.value)}
      />
      <button onClick={handleAdd}>Add todo</button>
      <button onClick={handleResetTodos}>Reset</button>
    </>
  );
}

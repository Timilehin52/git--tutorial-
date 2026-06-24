import React, { useEffect, useState } from "react";

export default function ComplexEffect() {
  const [todos, setTodos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch(url);
        const file = await response.json();
        console.log(file);
        setTodos(file);
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  });

  return (
    <div>
      <h1>List of Todos</h1>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <h1>{todo.completed}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

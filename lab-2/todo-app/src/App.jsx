import ToDoForm from "./Form";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Todos from "./Todos";

function App() {
  let [todos, setTodos] = useState([]);
  function addTodo(text) {
    text = text.trim();
    if (text === "") {
      return;
    }

    let newTodos = [...todos, { id: uuidv4(), text, isDone: false }];
    setTodos(newTodos);
  }

  function deleteTodo(todoId) {
    return () => {
      const newTodos = todos.filter((todo) => todo.id !== todoId);
      console.log(newTodos);
      setTodos(newTodos);
    };
  }

  return (
    <>
      <h1>To-Do App</h1>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
    </>
  );
}

export default App;

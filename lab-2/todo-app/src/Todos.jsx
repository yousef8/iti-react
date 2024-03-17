import Todo from "./components/Todo";

export default function Todos({ todos, deleteTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo}></Todo>
          <button onClick={deleteTodo(todo.id)}>delete</button>
        </div>
      ))}
    </>
  );
}

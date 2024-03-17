import Todo from "./components/Todo";

export default function Todos({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </>
  );
}

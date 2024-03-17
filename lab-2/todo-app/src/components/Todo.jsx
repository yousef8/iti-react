import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function Todo({ todo }) {
  let [isChecked, setIsChecked] = useState(false);

  function handleChecked(e) {
    todo.isDone = e.target.checked;
    setIsChecked(todo.isDone);
  }
  return (
    <>
      <div
        className="mb-3"
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
      >
        <Form.Check
          type="checkbox"
          label={todo.text}
          onChange={handleChecked}
        />
      </div>
    </>
  );
}

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef } from "react";

export default function ToDoForm({ addTodo }) {
  let todo = useRef("");

  function handleInput() {
    addTodo(todo.current.value);
    todo.current.value = "";
  }
  return (
    <>
      <InputGroup className="mb-3">
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={handleInput}
        >
          ToDo
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          ref={todo}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleInput();
            }
          }}
        />
      </InputGroup>
    </>
  );
}

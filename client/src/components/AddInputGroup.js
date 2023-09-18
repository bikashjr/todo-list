import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useAPIContext } from "../contexts";

function AddInputGroup({
  taskId,
  label,
  buttonName,
  placeholder,
  variant,
  url,
}) {
  const [title, setTitle] = useState("");
  const { error, create } = useAPIContext();

  const handleSubmit = async () => {
    const payload = {
      title,
    };
    if (taskId) {
      payload.todo = taskId;
    }
    await create({ url, payload });
  };

  if (error) return <>{JSON.stringify(error)}</>;

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "Place Holder"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Button variant={variant || "success"} onClick={handleSubmit}>
          {buttonName || "Button Name"}
        </Button>
      </InputGroup>
    </>
  );
}

export default AddInputGroup;

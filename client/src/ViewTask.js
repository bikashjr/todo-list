import {Form ,Button } from "react-bootstrap"

function ViewTask({label}) {
  return (
    <div> <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label={label} />
  </Form.Group>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Delete-button.svg" alt="img-delete"> </img>
  </div>
  )
}

export default ViewTask
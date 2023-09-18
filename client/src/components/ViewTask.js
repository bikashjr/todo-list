import { Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import popupAlert from "../utils/popupAlert";

import { useAPIContext } from "../contexts";
import { URLS } from "../constants";

function ViewTask({ subTaskId, label, status }) {
  const { remove, updateStatus } = useAPIContext();
  const removeMe = async () => {
    const result = await popupAlert();
    if (!result) return null;
    await remove({ id: subTaskId, url: URLS.SUBTASKS });
  };
  const handleChange = async (status) => {
    const payload = {
      status: status ? "completed" : "pending",
    };
    await updateStatus({ url: URLS.SUBTASKS, id: subTaskId, payload });
  };
  return (
    <>
      <Form.Group className="mb-3 d-flex justify-content-between">
        <Form.Check
          className="w-3"
          type="checkbox"
          checked={status === "completed" ? true : false}
          label={label || "Label Placeholder"}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <FaTrashAlt className="mx-5" color="red" onClick={() => removeMe()} />
      </Form.Group>
    </>
  );
}

export default ViewTask;

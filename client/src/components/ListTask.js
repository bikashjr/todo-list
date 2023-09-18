import { Accordion, Col, Form } from "react-bootstrap";
import AlertMsg from "./AlertMsg";
import SubtaskList from "./SubtaskList";
import TaskStatus from "./TaskStatus";

import { useAPIContext } from "../contexts";
import { URLS } from "../constants";

function ListTask({ tasks }) {
  const { updateStatus } = useAPIContext();
  const handleChange = async (status, id) => {
    const payload = {
      status: status ? "completed" : "pending",
    };
    await updateStatus({ url: URLS.TODOS, id, payload });
  };
  return (
    <Accordion defaultActiveKey="0">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => {
          return (
            <Accordion.Item key={task?._id} eventKey={index}>
              <Accordion.Header>
                <Col xs={7}>
                  <Form.Group className="ml-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={
                        task && task?.status === "completed" ? true : false
                      }
                      onChange={(e) => {
                        handleChange(e.target.checked, task?._id);
                      }}
                    />
                    &nbsp;
                    <span>{task?.title}</span>
                  </Form.Group>
                </Col>
                <Col xs={3}>
                  <div>
                    {task && task.subtasks.length > 0 && (
                      <div>
                        <TaskStatus
                          total={task?.subtasks.length}
                          completed={
                            task?.subtasks.filter(
                              (subtask) => subtask.status === "completed"
                            ).length ?? 0
                          }
                        />
                      </div>
                    )}
                  </div>
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                <SubtaskList task={task?._id} subtasks={task?.subtasks} />
              </Accordion.Body>
            </Accordion.Item>
          );
        })
      ) : (
        <AlertMsg
          variant="danger"
          msg="No task Found. Add task to get started..."
        />
      )}
    </Accordion>
  );
}

export default ListTask;

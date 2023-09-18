import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Title from "./components/Title";
import AddTask from "./components/AddInputGroup";
import ListTask from "./components/ListTask";
import { URLS } from "./constants";
import { useAPIContext } from "./contexts";
import Toastr from "./global/Toastr";

function App() {
  const { data: tasks, error, list } = useAPIContext();

  useEffect(() => {
    list(URLS.TODOS);
  }, [list]);

  if (error) return <>{JSON.stringify(error)}</>;

  return (
    <>
      <Container className="text-center">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Title title="TODO APP" />
            <AddTask
              url={URLS.TODOS}
              label="Add new Todo?"
              placeholder="Eg: Do Laundry"
              buttonName="Add the task"
            />
            <ListTask tasks={tasks} />
          </Col>
        </Row>
      </Container>
      <Toastr />
    </>
  );
}

export default App;

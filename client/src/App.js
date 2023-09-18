import { Container, Row, Col } from "react-bootstrap";
import Title from "./components/Title";
import Todo from "./pages/Todo";
import AddTodo from "./components/AddTodo";
import { API_SERVER } from "./constants";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Title name="TODO App" />
            <AddTodo
              label="Add New Task"
              placeholder="Eg: Do Laundry"
              url={`${API_SERVER}/todos`}
            />
            <Todo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

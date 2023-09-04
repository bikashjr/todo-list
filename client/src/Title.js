import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
function Title({heading}) {
  return (
    <Container>
      <Row>
        
      </Row>
      <Row>
        
        <Col sm className="text-center " ><h1>{heading}</h1></Col>
      </Row>
    </Container>
  );
}

export default Title;

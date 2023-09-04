import { Button } from "react-bootstrap";
import React from "react";

function CButton({ title }) {
  return (
    <div>
      <Button variant="primary">{title}</Button>
    </div>
  );
}

export default CButton;

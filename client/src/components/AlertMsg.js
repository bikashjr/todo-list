import { Alert } from "react-bootstrap";

function AlertMsg({ variant, msg }) {
  return (
    <>
      <Alert variant={variant || "primary"}>
        {msg || "Message Placeholder"}
      </Alert>
    </>
  );
}

export default AlertMsg;

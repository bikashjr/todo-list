import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

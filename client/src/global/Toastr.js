import { Toast, ToastContainer } from "react-bootstrap";
import { useToastContext } from "../contexts/ToastContext";

function Toastr() {
  const { show, setShow, toast } = useToastContext();
  return (
    <ToastContainer className="p-2" position="bottom-end" style={{ zIndex: 1 }}>
      <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{toast?.title || "Toast Title"}</strong>
        </Toast.Header>
        <Toast.Body>{toast?.msg || "Toast Message"}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toastr;

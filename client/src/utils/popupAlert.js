import Swal from "sweetalert2";

async function popupAlert() {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  if (!result.isConfirmed) return false;
  Swal.fire("Deleted!", "Your data has been deleted.", "success");
  return true;
}

export default popupAlert;

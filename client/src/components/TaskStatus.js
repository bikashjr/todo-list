import React from "react";

function TaskStatus({ total, completed }) {
  return (
    <div>
      {completed} of {total} completed
    </div>
  );
}

export default TaskStatus;

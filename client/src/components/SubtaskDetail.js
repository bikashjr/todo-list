import React from "react";
import ViewTask from "./ViewTask";

function SubtaskDetail({ subtasks }) {
  return (
    <>
      {subtasks &&
        subtasks.length > 0 &&
        subtasks.map((subtask, index) => {
          return (
            <ViewTask
              key={index}
              subTaskId={subtask?._id}
              label={subtask?.title}
              status={subtask?.status}
            />
          );
        })}
    </>
  );
}

export default SubtaskDetail;

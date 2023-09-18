import React from "react";
import AlertMsg from "./AlertMsg";
import AddInputGroup from "./AddInputGroup";
import SubtaskDetail from "./SubtaskDetail";
import { URLS } from "../constants";

function SubtaskList({ task, subtasks }) {
  return (
    <>
      {subtasks && subtasks.length > 0 ? (
        <>
          <SubtaskDetail subtasks={subtasks} />
        </>
      ) : (
        <AlertMsg
          variant="danger"
          msg="No Subtasks Found. Add to get started..."
        />
      )}
      <AddInputGroup
        taskId={task}
        url={URLS.SUBTASKS}
        label="Add new Subtask"
        placeholder="Eg. Gather Clothes"
        buttonName="Add Subtask"
        variant="primary"
      />
    </>
  );
}

export default SubtaskList;

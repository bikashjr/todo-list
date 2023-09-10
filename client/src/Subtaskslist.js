import React from 'react'
import AlertMsg from './Alert'
import Addtasks from './Addtasks';
import SubtaskDetails from './SubtaskDetails';

function Subtaskslist({subtasks}) {
    return <>
            {subtasks && subtasks.length > 0 ? (
                <> <SubtaskDetails subtasks={subtasks}/> </> 
                ): ( <AlertMsg variant="danger" msg="No sub task found" />
                )}
                <Addtasks label ="Add new Subtasks" placeholder="EG.Gather Clothes" buttonName="Add Subtasks"/>
                </>;
}

export default Subtaskslist
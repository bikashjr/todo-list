import React, { Suspense } from 'react'
import ViewTask from './ViewTask'

function SubtaskDetails({subtasks}) {
  return (
<>
{subtasks && subtasks.length > 0 &&  subtasks.map((item,index)=>{
    return  <> 
    <ViewTask/>
    </>
})
}
</>   
  )
}

export default SubtaskDetails
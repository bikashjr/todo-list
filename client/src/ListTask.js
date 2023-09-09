import Accordion from 'react-bootstrap/Accordion';
import Alertmsg from './Alert';
function ListTask({tasks}) {

    tasks = [
        { _id:"1" ,title : "Task 1" , Subtasks:[]},
        {  _id:"2" ,title : "Task 2" , Subtasks:[]},
    ]
  return (

    <Accordion defaultActiveKey={['0']} alwaysOpen className='mx-auto w-50'>
    {tasks && tasks.length > 0 ? 
        tasks.map((tasks)=>{
            return(
        <>
        <Accordion.Item eventKey="0">
        <Accordion.Header>{tasks.title}</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      </>
      )
    })
        
        
          :  <Alertmsg 
          variant ='danger'
          message="NO TASK FOUND ...  "/>}
          
      
    </Accordion>
  );
}

export default ListTask;
import Accordion from 'react-bootstrap/Accordion';
import Alertmsg from './Alert';
import Subtaskslist from './Subtaskslist';
function ListTask({tasks}) {

    tasks = [
        { _id:"1" ,title : "Task 1" , status:'pending',Subtasks:[
          {_id:"1" ,title : "Sub Task 1" , status:'pending'},
          {_id:"2" ,title : "Sub Task 1" , status:'pending'},
          {_id:"3" ,title : "Sub Task 1" , status:'completed'},
        ]},
        {  _id:"2" ,title : "Task 2" , status:'pending', Subtasks:[
          {_id:"1" ,title : "Sub Task 1" , status:'completed'},
          {_id:"2" ,title : "Sub Task 1" , status:'completed'},
          {_id:"3" ,title : "Sub Task 1" , status:'completed'},
        ]},
    ]
  return (

    <Accordion defaultActiveKey='0'  className='mx-auto w-50'>
    {tasks && tasks.length > 0 ? 
        tasks.map((tasks)=>{
            return(
        <>
        <Accordion.Item eventKey="0" key={tasks?._id}>
        <Accordion.Header>{tasks.title}</Accordion.Header>
        <Accordion.Body>
         <Subtaskslist subtasks={tasks?.subtasks}/>
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
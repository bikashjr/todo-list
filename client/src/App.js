import Addtasks from './Addtasks';
import Alertmsg from './Alert';
import ListTask from './ListTask';
import Title from './Title';



function App() {
  return (
    <div>
            <Title title="TODO-APP"/>
    
        <Addtasks label="Add New Todo?" placeholder="Add your todos"/>
    
        <Alertmsg variant='danger' message="No todos Found!!"/>
    <ListTask/>
        </div>
        )
  }
    

export default App
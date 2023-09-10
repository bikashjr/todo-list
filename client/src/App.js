import Addtasks from './Addtasks';
import Alertmsg from './Alert';
import ListTask from './ListTask';
import Posts from './Posts'
import PostDetails from './PostDetails';
import Title from './Title';



function App() {
  return (
    <div>
            <Title title="TODO-APP"/>
    
        <Addtasks label="Add New Todo?" placeholder="Add your todos"/>
    
        <Alertmsg variant='danger' message="No todos Found!!"/>
    <ListTask/>
    
    <PostDetails/>
    <br/>
    <Posts/>
        </div>
        )
  }
    

export default App
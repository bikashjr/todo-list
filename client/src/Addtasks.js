import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Addtasks = ({label,buttonName,placeholder}) => {
    return (
        <div className='w-50 mx-auto'>
        <InputGroup className="mb-3">
            <InputGroup.Text>{ label ||  'Label'}</InputGroup.Text>
            <Form.Control placeholder={placeholder||"placeholder"}/>
            <Button variant="success">Add the todos</Button>
        </InputGroup>
    </div>
    );
}



export default Addtasks;
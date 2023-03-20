import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddTask = ({ onAdd }) => {
    const [taskText, setTaskText] = useState('');

    const handleInputChange = (e) => {
        const textValue = e.target.value;
        setTaskText(textValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTaskText = taskText.trim();
        if(newTaskText.length > 0) {
            onAdd(newTaskText);
            setTaskText('');
        }
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input type='text' value={taskText} placeholder='Unesi novi zadatak' onChange={handleInputChange} />
                <input type='submit' value='Dodaj' />
            </form> */}
            <Row>
                <Col>
                    <InputGroup className="mt-3 mb-3 m-auto">
                        <Form.Control placeholder="Unesi novi zadatak" value={taskText} onChange={handleInputChange} />
                        <Button onClick={handleSubmit} variant="outline-secondary">Dodaj</Button>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    );
}

export default AddTask;
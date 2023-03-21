import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskText: ''
        }
    }

    handleInputChange = (e) => {
        const textValue = e.target.value;
        this.setState({taskText: textValue});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newTaskText = this.state.taskText.trim();
        if(newTaskText.length > 0) {
            this.props.onAdd(newTaskText);
            this.setState({taskText: ''});
        }
    }

    render(){
        return (
            <div>
                {/* <form onSubmit={handleSubmit}>
                    <input type='text' value={taskText} placeholder='Unesi novi zadatak' onChange={handleInputChange} />
                    <input type='submit' value='Dodaj' />
                </form> */}
                <Row>
                    <Col className='m-auto' sm={6}>
                        <InputGroup className="mt-3 mb-3">
                            <Form.Control placeholder="Unesi novi zadatak" value={this.state.taskText} onChange={this.handleInputChange} />
                            <Button onClick={this.handleSubmit} variant="outline-secondary">Dodaj</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

AddTask.propTypes = {
    onAdd: PropTypes.func
}

export default AddTask;
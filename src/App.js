import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './AddTask';
import Item from './Item';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link, useLocation } from 'react-router-dom';

let currentId = 3;

// filter values
const ALL = 'ALL';
const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, name: 'oprati prozore', isDone: false},
    { id: 2, name: 'task 2', isDone: true},
    { id: 3, name: 'bla bla bla', isDone: false}
  ]);
  const [filter, setFilter] = useState(ALL);

  let location = useLocation();

  useEffect(() => {
    if(location.pathname === '/active'){
      setFilter(ACTIVE);
    } else if (location.pathname === '/inactive'){
      setFilter(INACTIVE);
    }else {
      setFilter(ALL);
    }
  }, [location]);

  const handleAdd = (text) => {
    currentId++;
    const newTask = {id: currentId, name: text, isDone: false};
    const newTaskList = [newTask, ...taskList];
    setTaskList(newTaskList);
  }
  
  const handleDelete = (taskIdForDelete) => {
    const newList = taskList.filter(task => task.id !== taskIdForDelete);
    setTaskList(newList);
  }

  const handleStatusChange = (taskId) => {
    const newTaskList = [...taskList];
    const task = newTaskList.find(task => task.id === taskId);
    
    // if(task.isDone) {
    //   task.isDone = false;
    // }else {
    //   task.isDone = true;
    // }

    task.isDone = !task.isDone;

    setTaskList(newTaskList);
  }

  const getFilteredList = () => {
    if(filter === ALL){
      return taskList;
    }

    if(filter === ACTIVE) {
      return taskList.filter(task => task.isDone === false);
    }

    if(filter === INACTIVE) {
      return taskList.filter(task => task.isDone === true);
    }

    return [];
  }

  const handleDeleteDone = () => {
    const newList = taskList.filter(task => task.isDone === false);
    setTaskList(newList);
  }

  return (
    <Container fluid>
      <div className="App">
        <h1>TODO App</h1>
        <Row>
          <Col>
            <Link to='/'>
              <Button>SVI</Button>
            </Link>
          </Col>
          <Col>
            <Link to='/active'>
              <Button>AKTIVNI</Button>
            </Link>
          </Col>
          <Col>
            <Link to='/inactive'>
              <Button>GOTOVI</Button>
            </Link>
          </Col>
          <Col>
            <Button onClick={handleDeleteDone}>Obriši gotove</Button>
          </Col>
        </Row>
        <div>
            <AddTask onAdd={handleAdd}/>
            {/* {getFilteredList().map(taskItem => 
                <Item key={taskItem.id}
                    task={taskItem}
                    onDelete={handleDelete} 
                    onStatusChange={handleStatusChange} />
            )} */}
            <Row>
              <Col className='m-auto' sm={7} >
                <Card style={{ boxShadow: '10px 10px 20px' }}>
                  <ListGroup >
                    {getFilteredList().map(taskItem => 
                        <ListGroup.Item key={taskItem.id}>
                          <Item
                              task={taskItem}
                              onDelete={handleDelete} 
                              onStatusChange={handleStatusChange} />
                        </ListGroup.Item>
                    )}                
                  </ListGroup>
                </Card>
              </Col>
            </Row>
        </div>
      </div>
      <Link to='/weather'>Weather app</Link>
    </Container>
  );
}

export default App;

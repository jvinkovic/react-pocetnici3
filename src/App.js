import { useState } from 'react';
import './App.css';
import AddTask from './AddTask';
import Item from './Item';

let currentId = 3;

function App() {
  const [taskList, setTaskList ] = useState([
    { id: 1, name: 'oprati prozore', isDone: false},
    { id: 2, name: 'task 2', isDone: true},
    { id: 3, name: 'bla bla bla', isDone: false}
  ]);

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

  return (
    <div className="App">
      <h1>TODO App</h1>

      <button>SVI</button>
      <button>AKTIVNI</button>
      <button>GOTOVI</button>
      <button>Obriši gotove</button>

      <div>
          <AddTask onAdd={handleAdd}/>
          {taskList.map(taskItem => 
              <Item key={taskItem.id}
                  task={taskItem}
                  onDelete={handleDelete} 
                  onStatusChange={handleStatusChange} />
          )}
      </div>
    </div>
  );
}

export default App;

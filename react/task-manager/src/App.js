import {useState, useEffect} from 'react';
import axios from 'axios';

import TaskItem from './components/TaskItem';

const App = () => {
  const [task, setTask] = useState([
    {
      id: '1',
      description: 'Estudar programação',
      isCompleted: false
    },
    {
      id: '2',
      description: 'Ler',
      isCompleted: true
    },
  ]);
  
  const fetchTask = async () => {
    try {
      const {data} = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")

      setTask(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTask()
  }, [])


  return (
    <>
      {task.map(task => (
        <TaskItem key={task.id} tarefa={task}/>
      ))}
    </>
  );
}

export default App;

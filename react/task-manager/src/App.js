import {useState} from 'react';
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

  return (
    <>
      {task.map(task => (
        <TaskItem key={task.id} tarefa={task}/>
      ))}
    </>
  );
}

export default App;

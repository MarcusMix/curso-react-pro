import {useState, useRef, useEffect} from 'react';
import TaskItem from './components/TaskItem';

const App = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if(mounted.current === false) {
        mounted.current = true;
    } else {
        console.log('componentss was updated!')
    }
  })

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

  const handleCleanTask = () => {
    setTask([])
  }

  return (
    <>
      {task.map(task => (
        <TaskItem key={task.id} tarefa={task}/>
      ))}
      <button onClick={handleCleanTask}>Clean Tasks</button>
    </>
  );
}

export default App;

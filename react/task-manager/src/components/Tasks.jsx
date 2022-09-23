import { useState, useEffect } from "react";
import axios from 'axios';
import { useAlert } from "react-alert";

import './Tasks.scss'

import TaskItem from './TaskItem'
import AddTask from './AddTask'

const Tasks = () => {
    const [tasks, setTask] = useState([]);

    const alert = useAlert();

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")

            setTask(data)
            console.log(data)
        } catch (_error) {
            alert.error('Não foi possível recuperar as tarefas')
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            
            <div className="last-tasks">
            <h3>Últimas tarefas</h3>
            <AddTask fetchTasks={fetchTasks} />
                <div className="task-list">
                {tasks
                    .filter(task => task.isCompleted === false)
                    .map((lastTask) => (
                    <TaskItem 
                        key={lastTask._id}
                        task={lastTask} 
                        fetchTasks={fetchTasks}
                    />
                ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="task-list">
                    {tasks
                        .filter(task => task.isCompleted)
                        .map(completedTask => (
                            <TaskItem 
                                key={completedTask._id}
                                task={completedTask} 
                                fetchTasks={fetchTasks}
                            /> 
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks;
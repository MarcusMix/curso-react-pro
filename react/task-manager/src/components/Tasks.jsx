import { useState, useEffect } from "react";
import axios from 'axios';

import './Tasks.scss'

import TaskItem from './TaskItem'
import AddTask from './AddTask'

const Tasks = () => {
    const [tasks, setTask] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")

            setTask(data)
            console.log(data)
        } catch (error) {
            console.log(error)
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
                    <TaskItem task={lastTask}/>
                ))}
                </div>
            </div>

            <div className="completed-tasks">
            <h3>Tarefas concluídas</h3>
            <div className="task-list">
                {tasks
                    .filter(task => task.isCompleted)
                    .map(completedTask => (
                        <TaskItem task={completedTask}/> 
                    ))}
            </div>
            </div>
        </div>
    )
}

export default Tasks;
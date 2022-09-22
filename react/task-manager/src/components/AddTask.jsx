import { useState } from 'react'
import { FaPlus} from 'react-icons/fa'
import axios from 'axios'
import { useAlert }  from 'react-alert'

import CustomButton from './CustomButton'
import CustomInput from './CustomInput'

import './AddTask.scss'

const AddTask = ({fetchTasks}) => { 
    const [task, setTask] = useState("")

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value)
    }

    const handleTaskAddition = async () => {
        try {
            if(task === '') {
                return alert.error('A tarefe precisa de uma descrição!')
            }

            await axios.post('https://localhost:8000/tasks', {
                description: task,
                isCompleted: false,
            });

            await fetchTasks()

            setTask('')

        } catch (error) {
            alert.error('Algo deu errado!')
        }
    }

    return (
        <div className="add-task-container">
            <CustomInput 
                label="Adicionar tarefa..." 
                value={task} 
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="white"/>
            </CustomButton>
        </div>
    )
}


export default AddTask;
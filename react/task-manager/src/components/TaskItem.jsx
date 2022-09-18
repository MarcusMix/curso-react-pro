import { useEffect } from "react";

const TaskItem = ({tarefa}) => {

    useEffect(() => {
        console.log('components was mounted!')

        return () => {
            console.log('i will unmount!')
        }

    }, [])

    return (
        <>
            <h1>{tarefa.description}</h1>
            <p>{tarefa.isCompleted ? 'Completa' : 'Pendente'}</p>
        </>
    )
}



// class TaskItem extends React.Component {
//     render() {
//         const {task} = this.props

//         return (
//             <>
//                 <h1>
//                     {task.description}
//                 </h1>
//                 <p>
//                     {task.isCompleted ? 'completa' : 'não completa'}
//                 </p>
//             </>
//         )
//     }
// }
export default TaskItem;
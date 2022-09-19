const TaskItem = ({tarefa}) => {
    return (
        <>
            <h1>{tarefa.description}</h1>
            <p>{tarefa.isCompleted ? 'Completa' : 'Pendente'}</p>
        </>
    )
}

export default TaskItem;
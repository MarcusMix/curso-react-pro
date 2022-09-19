const TaskItem = ({ tasks }) => {
    return (
        <>
            <h1>{tasks.description}</h1>
            <p>{tasks.isCompleted ? 'Completa' : 'Pendente'}</p>
        </>
    )
}

export default TaskItem;
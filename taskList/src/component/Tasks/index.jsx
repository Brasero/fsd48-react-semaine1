import Task from "../Task/index.jsx";

function Tasks ({tasks, dispatch}) {

    return (
        <ul>
            {tasks.map(task => {
                return <Task key={task.id} task={task} dispatch={dispatch} />
            })}
        </ul>
    )
}

export default Tasks
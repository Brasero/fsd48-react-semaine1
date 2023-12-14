
function Task({task, dispatch}) {

    const handleClick = () => {
        dispatch({
            type: "toggle",
            payload: task.id
        })
    }

    const handleDelete = () => {
        dispatch({
            type: 'delete',
            payload: task.id
        })
    }

    return (
        <li>
            <input type={'checkbox'} onChange={handleClick} checked={task.done} />
            <span>{task.content}</span>
            <button style={{background: 'red'}} onClick={handleDelete}>X</button>
        </li>
    )
}

export default Task
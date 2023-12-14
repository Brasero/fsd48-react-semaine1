

export const initialState = {
    task: '',
    tasks: [],
    message: ''
}

const createTask = (task, tasks) => {
    let id = tasks.length !== 0 ? tasks.length + 1 : 1
    const newTask = {
        id: id++,
        content: task,
        done: false
    }
    return tasks.concat([newTask])
}

const toggleTask = (tasks, id) => {
    return tasks.map(task => {
        if(task.id === id) {
            return {
                ...task,
                done: !task.done
            }
        }
        return task
    })
}

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'changeValue':
            return {
                ...state,
                task: action.payload,
                message: ''
            }

        case 'add':
            return {
                ...state,
                task: '',
                tasks: createTask(state.task, state.tasks),
                message: "Tache ajoutée"
            }

        case 'toggle':
            return {
                ...state,
                tasks: toggleTask(state.tasks, action.payload)
            }

        case 'delete':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
                message: "Tache supprimée avec succès"
            }



        default:
            return state
    }
}

export default taskReducer
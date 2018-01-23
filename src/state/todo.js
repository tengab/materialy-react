const ADD_TASK = 'todo/ADD_TASK'
const DELETE_TASK = 'todo/DELETE_TASK'

let nextTaskId = 0

export const addTask = name => ({
    type: ADD_TASK,
    name,
    key: nextTaskId++
})

export const deleteTask = key => ({
    type: DELETE_TASK,
    key
})

const initialState = {
    tasks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat([
                    {
                        name: action.name,
                        key: action.key
                    }
                ])
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.key !== action.key)
            }
        default:
            return state
    }
}
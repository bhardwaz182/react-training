import{
    ADD_TASK,
    DELETE_TASK
} from '../actions/constants'

const initialState = {
    status: '',
    todoTasks: []
};

function todoListReducer(curState=initialState,action){
    let newState;
    switch (action.type) {
        case ADD_TASK:
            newState={
                ...curState,
                todoTasks:[...curState.todoTasks,action.payload.task]
            }
            break;
        case DELETE_TASK:
            newState={
                ...curState,
                todoTasks:[...curState.todoTasks.slice(0,action.payload.id),...curState.todoTasks.slice(action.payload.id+1)]
            }
            break
        default:
            newState=curState;
            break;
        }
        return newState;
}


export function selectTask( state ) {
    return state.todoList.todoTasks;
}
export default todoListReducer;
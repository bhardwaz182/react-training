import{
    ADD_TASK,
    DELETE_TASK
} from './constants'

function create_task(task){
    return{
        type:ADD_TASK,
        payload:{
            task
        }
    }
}
function delete_task(id){
    return{
        type:DELETE_TASK,
        payload:{
            id
        }
    }
}

export{
    create_task,
    delete_task
}
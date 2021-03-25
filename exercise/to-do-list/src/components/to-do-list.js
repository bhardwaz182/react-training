
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//mport todoListReducer from '../reducers/todoList';

import { selectTask } from '../reducers/todoList';
import './to-do.css';

import {
    create_task,
    delete_task
} from '../actions/creators';

export default function ToDOList(props){
    
    let inputRef=React.createRef();
    const dispatch = useDispatch();
    const ToDOList = useSelector( selectTask );
    

    let el=(
        <form>
            <input type="text" className="task-input"  ref={inputRef} placeholder="Add a task" />
            <button type="button" onClick={() => dispatch( create_task(  inputRef.current.value  ) )}>Add</button>
        </form>
    );

    let taskEl=(
        <ul className="todo-list">
            {
                ToDOList.map((task,idx)=>(
                    <React.Fragment>
                        <li key={idx}>
                            <input type="checkbox"  />
                            <span className="task-name">{task}</span>
                            <button onClick={()=>dispatch( delete_task(  idx  ) )}>Delete</button>
                        </li>
                    </React.Fragment>
                ))
            }
        </ul>
    );
    
    
    return(
        <>
       <div className="todo-list-app">{el}{taskEl}</div>
       </> 
    );
}
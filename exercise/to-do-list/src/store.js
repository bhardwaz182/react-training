import { createStore, combineReducers } from 'redux';
import todoListReducer from './reducers/todoList';

const store = createStore(
    combineReducers({
        todoList: todoListReducer
    }),
);

export default store;
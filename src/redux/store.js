import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";
import TaskReducer from './reducers/TaskReducer'



const store = createStore(
combineReducers({
    TaskReducer
}), 
applyMiddleware(thunk));

export default store;
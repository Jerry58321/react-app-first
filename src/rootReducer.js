import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ToDoList from "./Features/ToDoList/reducer";
import WeatherReporter from './Features/WeatherReporter/reducer';
import Login from './Features/Login/reducer';

import history from "./history";

export default combineReducers({
    ToDoList,
    WeatherReporter,
    Login,
    /**
     Counter,
     testReducer,
     */
    router: connectRouter(history)
});
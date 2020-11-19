import Master from './Features/Master';
import ToDoList from "./Features/ToDoList/Route";
import Weather from "./Features/WeatherReporter/Route";
import Login from "./Features/Login/Route";


const childRoutes = [ToDoList, Weather, Login];
const routes = [
    {
        path: '/',
        component: Master,
        childRoutes: [...childRoutes].filter(
            r => r.component || (r.childRoutes && r.childRoutes > 0)
        )
    }
];

export default routes;
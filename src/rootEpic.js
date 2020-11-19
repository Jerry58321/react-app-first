import GetWeather from './Features/WeatherReporter/epic';
import { combineEpics } from "redux-observable";

const rootEpic = combineEpics(...GetWeather);

export default rootEpic;
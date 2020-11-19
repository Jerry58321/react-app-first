import initialState from "./Action/initalState";
import { reducer as UpdateWeatherData } from "./Action/UpdateWeatherData";

const reducers = [UpdateWeatherData];

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // Handle cross-topic actions here
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action), newState);
}

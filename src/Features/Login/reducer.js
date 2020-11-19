import initialState from "./Action/initalState"
import { reducer as Auth } from "./Action/Auth";

const reducers = [Auth];

export default function reducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        default:
            newState = state;
            break;
    }
    return reducers.reduce((accumulator, currentValue) => currentValue(accumulator, action), newState);
}

import initialState from "./Action/initialState";
import { reducer as AddToDo } from "./Action/ADD_TODO";
import { reducer as SetFilter } from "./Action/SET_VISIBILITY_FILTER";
import { reducer as ToggleToDo } from "./Action/TOGGLE_TODO";

const reducers = [AddToDo, SetFilter, ToggleToDo];

export default function reducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        default:
            newState = state;
            break;
    }
    return reducers.reduce((accumulator, currentValue) => currentValue(accumulator, action), newState);
}
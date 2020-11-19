import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware } from "connected-react-router";
import history from "./history";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";

const router = routerMiddleware(history);

const epic = createEpicMiddleware();

const middleware = [router, epic];

function configureStore() {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(...middleware))
    );

    epic.run(rootEpic);

    return store;
}

export default configureStore();
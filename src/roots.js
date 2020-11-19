import React from 'react';
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import store from "./store";
import history from "./history";
import Login from "./Features/Login";
import TodoList from "./Features/ToDoList";

export default function Roots() {
    return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <Switch>
                  <Route component={Login} path={'/login'} exact/>
                  <Route render={() => store.getState().Login.isAuthenticated ? <TodoList /> : <Redirect to={'/login'}/>} path={'/todolist'} exact/>
              </Switch>
          </ConnectedRouter>
      </Provider>
    );
}

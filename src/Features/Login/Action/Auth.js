import React from 'react';
import history from "../../../history";

export const Info = (loginInfo) => ({
    type: 'LoginInfo',
    account: loginInfo.account.value,
    password: loginInfo.password.value
});

export const reducer = (state, action) => {
    switch (action.type) {
        case 'LoginInfo' :
            if (state.account === action.account && state.password === action.password) {
                // history.push('/todolist', state => state);
                return {...state, isAuthenticated: true};
            } else {
                return {...state, invaild: true};
            }
    }
    return state;
}
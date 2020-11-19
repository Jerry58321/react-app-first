import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { useFeatureSelector } from "../hooks";
import history from "../../../history";
import {useDispatch} from "react-redux";
import {Info} from "../Action/Auth";

const Viewer = () => {
    let loginInfo = [];
    const data = useFeatureSelector(state => state);
    const dispatch = useDispatch();
    if (data.isAuthenticated) {
        history.push('/todolist');
    }
    return (
        <div>
            <form className="form-horizontal" onSubmit={e => {
                e.preventDefault();
                dispatch(Info(loginInfo));

            }}>
                <div className="text-danger">{data.invaild ? '帳號或密碼錯誤' : ''}</div>
                <div className="form-group">
                    <div className="col-md-6">
                        <label>帳號：</label>
                        <input type="text" name="account" ref={ node => (loginInfo.account = node)}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-6">
                        <label>密碼：</label>
                        <input type="text" name="password" ref={ node => (loginInfo.password = node)}/>
                    </div>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Viewer;
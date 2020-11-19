import React from "react";
import { useDispatch } from "react-redux";
import { setVisibilityFilter } from "../actions";
import {useFeatureSelector} from "../hooks";

const Link = ({ filter, children }) => {
    const dispatch = useDispatch();
    const selector = filter => store => filter === store.filter;
    const active = useFeatureSelector(selector(filter));

    return (
        <button
            onClick={() => dispatch(setVisibilityFilter(filter))}
            disabled={active}
            style={{
                marginLeft: '4px'
            }}
        >
            { children }
        </button>
    );
};

export default Link;

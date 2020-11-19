import { useSelector } from "react-redux";
import { compose } from "redux";

export const featureSelector = (_stateSelector) => (_selector) =>
    useSelector(compose(_selector, _stateSelector));
import { featureSelector } from "../Common/hooks";

const  stateSelector = (state) => state.ToDoList;

export const useFeatureSelector = featureSelector(stateSelector);
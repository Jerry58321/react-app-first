import { featureSelector } from "../Common/hooks";

const stateSelector = (state) => state.Login;

export const useFeatureSelector = featureSelector(stateSelector);
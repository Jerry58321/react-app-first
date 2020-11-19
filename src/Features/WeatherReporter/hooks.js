import { featureSelector } from "../Common/hooks";

const stateSelector = (state) => state.WeatherReporter;

export const useFeatureSelector = featureSelector(stateSelector);
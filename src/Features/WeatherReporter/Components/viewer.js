import React from "react";
import { useDispatch } from "react-redux";
import { GetWeather } from "../actions";
import { useFeatureSelector } from "../../WeatherReporter/hooks";
import { useTranslation } from "react-i18next";

const Viewer = () => {
    const disptach = useDispatch();
    const { data } = useFeatureSelector(state => state);
    const { t } = useTranslation("Weather");

    let now = new Date();

    if (data == null)
        return (
            <div>
                <h5>
                    {t("time")}：{now.getHours()}:{now.getMinutes()}
                </h5>
                <button onClick={() => disptach(GetWeather())}>
                    {t("getweather")}
                </button>
            </div>
        );
    else
        return (
            <div>
                <h5>
                    {t("time")}：{now.getHours()}:{now.getMinutes()}
                </h5>
                <h5>
                    {t("weather")}：
                    {data.weatherElement[1].time[now.getHours()].elementValue[0].value}
                </h5>
                <h5>
                    {t("temp")}：
                    {data.weatherElement[2].time[now.getHours()].elementValue[0].value}
                </h5>
                <button onClick={() => disptach(GetWeather())}>
                    {t("getweather")}
                </button>
            </div>
        );
};

export default Viewer;

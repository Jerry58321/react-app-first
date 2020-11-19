import { ajax } from 'rxjs/observable/dom/ajax';
import { action as UpdateWeatherData } from "./UpdateWeatherData";
import { ofType } from "redux-observable";
import { of } from 'rxjs';
import { mergeMap, map } from "rxjs/operators";

export const action = () => ({
   type: "GetWeatherData"
});

export const epic = action$ =>
    action$.pipe(
      ofType("GetWeatherData"),
      mergeMap(action => {
          return ajax.getJSON(
              "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-C6A8BE74-2A3E-4EA9-AE22-1483ED51AC3F"
          ).pipe(mergeMap(response => of(UpdateWeatherData(response))));
      })
    );

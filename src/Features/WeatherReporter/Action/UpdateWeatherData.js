export const action = payload => ({
   type: "UpdateWeatherData",
   payload
});

export const reducer = (state, action) => {
    switch (action.type) {
        case 'UpdateWeatherData':
            let newData = action.payload.records.locations[0].location[17];
            return {...state, data: newData};
        default:
            return state;
    }
};
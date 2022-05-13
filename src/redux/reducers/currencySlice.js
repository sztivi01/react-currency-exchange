import { createSlice } from "@reduxjs/toolkit";
const exchangeRateSercice = require('../../shared/services/exchange-rate-services/exchange-rate.service');


// initial state
export const initialState = {
    rates: [],
    error: false,
    loading: false
};

// our slice
const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        //payload = rates
        setRates: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.rates = payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

// export the actions
export const { setLoading, setRates, setError } = currencySlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const currencySelector = (state) => state.currency;

// export the default reducer
export default currencySlice.reducer;


// fetch all items
export function fetchLatestRates() {
    return async (dispatch) => {
        exchangeRateSercice.getLatestRates()
            .then((response) => {
                dispatch(setRates(response.data.conversion_rates));
            })
            .catch((er) => {
                dispatch(setError());
                console.error(er)
            });
    };
}
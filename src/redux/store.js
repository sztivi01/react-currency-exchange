import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './reducers/currencySlice'

export default configureStore({
    reducer: {
        currency: currencyReducer
    }
})
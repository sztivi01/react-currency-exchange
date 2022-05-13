import exchangeRateClient from '../shared-services/exchange-rate-client-instance'
import moment from 'moment';

export async function getLatestRates(defaultCurrency = 'USD') {
    return await exchangeRateClient.get(`latest/${defaultCurrency}`);
}

//Not going to work as the current API Token is the free version
export async function getHistoricalRates(defaultCurrency = 'USD', year = moment().year(), month = moment().month() + 1, day = moment().date()) {
    return await exchangeRateClient.get(`history/${defaultCurrency}/${year}/${month}/${day}`);
}
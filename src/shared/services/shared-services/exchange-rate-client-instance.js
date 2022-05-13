const axios = require('axios');

/**
 * Creating a global instance of the axios, which is the client Api.
 * @type {AxiosInstance} is the instance of the client Api, it is used in every service.
 */
const exchangeRateClient = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/7178dfe7ad55fc08c92b2a5e",
})
export default exchangeRateClient

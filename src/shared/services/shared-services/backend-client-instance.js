const axios = require('axios');

/**
 * Creating a global instance of the axios, which is the client Api.
 * @type {AxiosInstance} is the instance of the client Api, it is used in every service.
 */
const backendClient = axios.create({
    baseURL: "https://localhost:5001/api",
})
export default backendClient

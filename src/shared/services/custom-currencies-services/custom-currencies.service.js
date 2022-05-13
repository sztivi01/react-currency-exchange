import backendClient from '../shared-services/exchange-rate-client-instance'

export async function createCustomCurrency(customCurreny) {
    return await backendClient.post('/customcurrency/create', customCurreny, { responseType: "json" })
}
export async function updateCustomCurrency(customCurrenyId, customCurreny) {
    return await backendClient.put('/customcurrency/update/' + customCurrenyId, customCurreny, { responseType: "json" })
}
export async function deleteCustomCurrency(customCurrenyId) {
    return await backendClient.delete('/customcurrency/delete/' + customCurrenyId)
}
export async function getCustomCurrency() {
    return await backendClient.get('/customcurrency')
}
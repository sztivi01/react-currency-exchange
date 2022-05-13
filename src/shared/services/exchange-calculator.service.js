//formula can be tested later with chia or other test frameworks
export function calculateExchange(amountToExchange, rateOfCurrencyFrom, rateOfCurrencyTo) {
    let res = amountToExchange * rateOfCurrencyFrom / rateOfCurrencyTo;
    return res.toFixed(4)
}
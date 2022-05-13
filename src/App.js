import './App.css';
import CurrencyInput from "./modules/currency-input/currency-input";
import { useState, useEffect } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { useDispatch, useSelector } from "react-redux";
import { fetchLatestRates, currencySelector, setLoading } from "./redux/reducers/currencySlice";
import { calculateExchange } from './shared/services/exchange-calculator.service';

function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');

  // set up dispatch
  const dispatch = useDispatch();

  const { error, loading, rates } = useSelector(currencySelector)


  useEffect(() => {
    dispatch(setLoading())
    dispatch(fetchLatestRates())
    if (error) return NotificationManager.error('Please try again later!', 'Oops..Something went wrong', 5000, () => {
      alert('callback');
    })
  }, [dispatch, error]);


  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, []);


  function handleAmount1Change(amount1) {
    setAmount2(calculateExchange(amount1, rates[currency2], rates[currency1]))
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(calculateExchange(amount1, rates[currency2], rates[currency1]))
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(calculateExchange(amount2, rates[currency1], rates[currency2]))
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(calculateExchange(amount2, rates[currency1], rates[currency2]))
    setCurrency2(currency2);
  }


  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={parseFloat(amount1)}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={parseFloat(amount2)}
        currency={currency2} />
      <NotificationContainer />
    </div>
  );
}

export default App;
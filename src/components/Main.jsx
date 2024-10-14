
import { useState } from 'react';
import {InputBox} from './index';
import useCurrencyInfo from '../hooks/useCurrencyInfo';


function Main() {
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState();
  
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo || {});
    
    if (!currencyInfo || !options.length) {
      return <div>Loading...</div>;
    }
  
    const swap = () => {
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
      console.log("swapped");
    };
  
    const convert = () => {
      const conversionRate = currencyInfo[to];
      if (conversionRate) {
        setConvertedAmount(amount * conversionRate);
      } else {
        setConvertedAmount(0);
      }
    };


  return (
    <div>
      <div className=''>
        <div className='p-3 m-4 text-4xl font-bold text-center text-stone-50'>
            <h2>Currency Converter</h2>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div>
            <InputBox
              label={`From (${from.toUpperCase()})`}
              amount={amount}
              currencyOption={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={setAmount}
              amountDisable={false}
              currencyDisable={false}
            />
          </div>
          <div>
          <div className='p-1 m-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800'>
            <button type="button" onClick={swap}>Swap</button>
          </div>
          </div>
          <div>
            <InputBox
              label={`To (${to.toUpperCase()})`}
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable={true}
              currencyDisable={false}
            />
          </div>
          <div className='p-1 m-2 font-semibold transition duration-300 ease-in-out rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-800'>
            <button type="submit">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Main

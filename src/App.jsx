import { useState } from 'react';
import {InputBox} from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

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
  const result=   setConvertedAmount(amount * currencyInfo[to]);
    console.log(result);
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div>
            <InputBox
              label= {from}
              amount={amount}
              currencyOption={options}
              onCurrencyChange={setFrom}
              selectCurrency= {from}
              onAmountChange={setAmount}
              amountDisable = {false}
              currencyDisable = {false}
            />
          </div>
          <div>
            <button type="button" onClick={swap}>Swap</button>
          </div>
          <div>
            <InputBox
              label= {to}
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable = {false}
              currencyDisable = {false}

              onAmountChange = {setTo}
             
             
            
             
            />
          </div>
          <div>
            <button type="submit">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

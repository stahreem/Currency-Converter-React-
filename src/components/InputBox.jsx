import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption ,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className='bg-sky-700 rounded-md text-sm'>
      <div className='w-1/2'>
        <label htmlFor={amountInputId}>{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          id={amountInputId}
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div>
        <p>currency Option</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((crrency) => (
            <option key={crrency} value={crrency}>{crrency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
